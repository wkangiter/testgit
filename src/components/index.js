import Main from './Index.vue'
// import Main from './src/components/system-echart-bar/Index.vue'
// import _Vue from 'vue'

Main.install = Vue => {
if (!Vue) {
window.Vue = Vue
}
Vue.component(Main.name, Main)
}
export default Main;
