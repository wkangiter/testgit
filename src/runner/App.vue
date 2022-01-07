<template>
  <div id="app">
    <ResafetySystemEchartRiangularcone
      v-bind="instanceData"
      @setCompatComponentProps="setCompatComponentProps"
      @executeComponentInteraction="executeComponentInteraction"
      :key="cKey"
    />
  </div>
</template>

<script>
import ResafetyComponentBase from "./resafety-compnent-base";
import ResafetySystemEchartRiangularcone from "../components/Index.vue";

ResafetySystemEchartRiangularcone.mixins = [ResafetyComponentBase];

const instanceData1 = {
  name: "resafety-system-echart-riangularcone-bar",
  instanceVersion: "1.0.0",
  instanceId: "resafety-system-echart-riangularcone-bar:10000001",
  config: {
    main: {
      defaultAction: {
        create: true,
        "@create": {
          name: "初始化创建",
          type: "boolean",
          layout: "group-name-behind",
        },
        show: true,
        "@show": {
          name: "初始化显示",
          comment: "如果初始化不创建，则当组件创建后默认该显示状态",
          type: "boolean",
          layout: "group-name-behind",
        },
      },
      "@defaultAction": {
        name: "默认行为",
        comment: "初始化时默认执行的行为",
        type: "json",
        layout: [1, 2],
      },
      layout: {
        left: 100,
        "@left": {
          name: "X",
          type: "int",
          unit: "px",
          layout: "group-name-bottom",
        },
        top: 100,
        "@top": {
          name: "Y",
          type: "int",
          unit: "px",
          layout: "group-name-bottom",
        },
        width: 539,
        "@width": {
          name: "宽度",
          type: "int",
          unit: "px",
          range: "[0, +∞)",
          layout: "group-name-bottom",
        },
        height: 330,
        "@height": {
          name: "高度",
          type: "int",
          unit: "px",
          range: "[0, +∞)",
          layout: "group-name-bottom",
        },
      },
      "@layout": {
        name: "位置尺寸",
        type: "json",
        layout: [2, 2],
      },
      padding: [0, 0, 0, 0],
      "@padding": {
        name: "内边距",
        type: "padding",
      },
      backgroundColor: "#000000",
      "@backgroundColor": {
        name: "背景色",
        type: "color",
      },
      backgroundImage: "url(./xxx.png)",
      "@backgroundImage": {
        name: "背景图",
        type: "image",
      },
      zIndex: 2,
      "@zIndex": {
        name: "层级",
        type: "int",
        range: "[0, 999]",
      },
    },
  },
  datasource: {
    type: "static", //dynamic
    // sourceList: [
    //     {
    //         id: '数据接口id',
    //         param: '参数配置内容'
    //         // ...其他
    //     }
    // ]
  },
  interaction: [
    {
      id: "10002",
      event: "click",
      // element: "title", // null或者undefined时代表全局
      // conditional: { // 事件执行的条件
      // },
      target: [
        {
          component: "resafety-system-echart-riangularcone-bar:10000001", // 要驱动的组件
          action: "red", // 被驱动的组件执行什么行为
          param: null, // 传输的数据
          // ...
        },
      ],
    },
    // 其他交互配置信息
  ],
};

export default {
  name: "App",
  components: {
    ResafetySystemEchartRiangularcone,
  },
  data() {
    return {
      instanceData: instanceData1,
      content1: "aaa",
      cKey: "1001",
    };
  },
  methods: {
    //组件内部处理完兼容后，抛出处理后的数据
    setCompatComponentProps(data) {
      console.log(data);
      this.instanceData = data;
      this.cKey = "1002";
      // debugger
      // 修改组件的key值
      // this.$children[0].$vnode.key = (new Date()).getTime();
    },

    //触发了组件的某个事件后，执行该事件对应的交互
    executeComponentInteraction(instanceId, interactionId, dataset) {
      console.log(instanceId, interactionId, dataset);
      const action = this.instanceData.interaction[0].target[0].action; //@Todo 根据组件实例id和交互id找到绑定的行为
      this.$children[0][action]();
      // this.$children[0][action]( dataset ) //需要时把数据传进去
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
