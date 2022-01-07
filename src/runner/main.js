import Vue from 'vue'
import App from './App.vue'

// window.vk = Vue;
// export default App;

const mergeProps = Vue.config.optionMergeStrategies.props

// 混入组件的 props.config.main 和 props.config.animation
Vue.config.optionMergeStrategies.props = function (toVal, fromVal) {
    // console.log('toVal', toVal); // base里的
    // console.log('fromVal', fromVal); // 各组件里的

    // @Todo 此处还需要需要增加是否是architect规范组件的判断，非architect规范组件时不修改合并的行为
    if (toVal && toVal.config && toVal.config.default && fromVal && fromVal.config && fromVal.config.default) {
        const orgComponentPropsConfigDefaultFunction = fromVal.config.default

        // debugger;
        fromVal.config.default = () => {
            let componentPropsConfig = orgComponentPropsConfigDefaultFunction()
            let basePropsConfig = toVal.config.default()

            if( !componentPropsConfig.main ){
                componentPropsConfig.main = basePropsConfig.main
            }
            if( !componentPropsConfig.animation ){
                componentPropsConfig.animation = basePropsConfig.animation
            }

            // console.log(componentPropsConfig)
            return componentPropsConfig
        }

    }

    let result = mergeProps(toVal, fromVal)
    // console.log('result', result);

    return result
}

window.vm = new Vue({
  el: '#app',
  render: h => h(App)
})

