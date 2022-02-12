import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入路由
import router from '@/router'

// 三级联动组建--全局
import TypeNav from "@/pages/Home/TypeNav";
// 第一个参数：全局组件的名字，第二个参数，哪一个组件
Vue.component(TypeNav.name, TypeNav)
//
import {getBaseCategory} from "@/api/TypeNav/Three_level_linkage";
getBaseCategory()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')


