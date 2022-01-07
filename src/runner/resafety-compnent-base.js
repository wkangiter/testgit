import _ from 'lodash';

export default {
  props: {
    instanceId: {
      type: String,
      required: true
    },
    instanceVersion: {
      type: String,
      required: true
    },
    instanceName: {
      type: String
    },
    config: {
      type: Object,
      default: () => {
        return {
        }
      }
    },
    datasource: {
      type: Object,
      default: () => {
        return {
          type: 'static',
          dataset: []
        }
      },
    },
    interaction: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      dataset: this.datasource.dataset,
      main: this.config.main,
      isShow: this.config.main.defaultAction.show,
      layout: this.config.main.layout,
      mainStyle: {
        padding: this.config.main.padding,
        backgroundColor: this.config.main.backgroundColor,
        backgroundImage: this.config.main.backgroundImage,
        zIndex: this.config.main.zIndex,
      },
      eventList: {},
      option: {}, //各组件自己实现
    };
  },
  computed: {
    eventListeners() {
      return Object.assign({}, this.$listeners, this.eventList);
    },
    mainCssVars() {
      const { left, top, width, height } = this.main.layout;
      const { padding, backgroundColor, border, opcity } = this.main;
      return {
        "--left": `${left}px`,
        "--top": `${top}px`,
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--padding": padding,
        "--backgroundColor": backgroundColor,
        "--border": border,
        "--opcity": opcity,
      };
    }
  },
  methods: {

    /**
     * 组件兼容处理方法
     *     1、在组件初始化前调用，只调用一次
     *     2、必须针对当前版本返回一份新的数据，组件的props相关内容会被设置为新的数据
     * @param {*} originalVersion  组件实例所对应的版本号
     * @param {*} originalPropsData  组件实例数据
     * @returns 新的数据
     */
    compat(originalVersion, originalPropsData) {
      // 在这里根据历史版本号和当前option生成一份新版本的数据（然后调用父组件的方法抛出新数据，由父组件重新设置config ）
      // console.log( originalPropsData );
      // console.log( originalVersion );

      //处理配置数据
      console.log(originalVersion);

      return originalPropsData
    },


    /**
     * 组件初始化方法
     *     1、初始化时调用，只调用一次
     */
    init() { },


    /**
     * 组件修改方法
     *     当组件props变化时会被调研，每次变化都会调用
     * @param {*} config 
     * @param {*} datasource 
     */
    // 组件配置和数据源发生变化事调用，只有一个有变化时，另外一个为null
    update(config, datasource) { },


    /**
     * 组件销毁方法
     *    当组件被销毁时会被调用
     */
    //组件销毁时调用
    destroy() { },


    /**
     * 组件事件注册方法
     * @param {*} eventName 
     * @param {*} triggerElement 
     * @param {*} interactionId 
     */
    addEventListener(eventName, triggerElement, interactionId) { },


    /**
     * 组件取消注册方法
     * @param {*} eventName 
     * @param {*} triggerElement 
     * @param {*} interactionId 
     */
    removeEventListener(eventName, triggerElement, interactionId) { },


    // props里的config.option转化成data中的option
    convertOption(option) {

      return option;
    },



    // 组件的行为
    toggle() {
      this.isShow = !this.isShow
    },
    show() {
      this.isShow = true
    },
    hide(ev) {
      this.isShow = false
    },

    setProperty() {

    },

    refreshDynamicDatasource() {

    }

  },
  beforeCreate() {
    //处理兼容性
    if (this.$options.methods.compat && this.$options.propsData.instanceVersion != this.$options.version) {
      let newPropsData = this.$options.methods.compat(this.$options.propsData.instanceVersion, JSON.parse(JSON.stringify(this.$options.propsData)));
      newPropsData.instanceVersion = this.$options.version;

      //发送新的数据给parent解释器
      this.$emit('setCompatComponentProps', newPropsData);

      return;
    }

    // 处理props的固定key的默认
    // @Todo 需要检验默认值是否定义
    this.$options.propsData.config = _.merge(this.$options.props.config.default(), this.$options.propsData.config);
    this.$options.propsData.datasource = _.merge(this.$options.props.datasource.default(), this.$options.propsData.datasource);
  },
  created() {
    if (this.instanceVersion != this.$options.version) return
  },
  mounted() {
    console.log('混入成功')

    // if( this.instanceVersion != this.$options.version ) return

    this.init();

    // 绑定事件
    if (!this.interaction) return
    // this.interaction.forEach((evt) => {
    //   this.addEventListener(evt.event, evt.element, evt.id);
    // })
  },
  watch: {
    datasource: {
      deep: true,
      handler() {
        const datasource = _.merge(this.$options.props.datasource.default(), this.datasource);
        this.updateDataset(datasource);
      },
    },
    interaction: {
      deep: true,
      handler() {
        console.log(this.interaction);
        //在这里处理交互的变化
      }
    }
  },

};

