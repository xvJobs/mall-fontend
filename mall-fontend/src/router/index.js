import Vue from 'vue'
import VueRouter from "vue-router";

// 使用vue插件
Vue.use(VueRouter)

// 引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

//VueRouter原型对象的push
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
/*
* 重写push｜replace
* 第一个参数：告诉原来push方法，跳转地址，传递参数
* 第二个参数：成功回调
* 第三个参数：失败的回调
* */
VueRouter.prototype.push = function (location, resolve,reject) {
    if (resolve && reject) {
        originPush.call(this.location, this.resolve, this.reject)
    } else {
        originPush.call(this.location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function (location, resolve,reject) {
    if (resolve && reject) {
        originReplace.call(this.location, this.resolve, this.reject)
    } else {
        originReplace.call(this.location, () => {}, () => {})
    }
}

// 配置路由
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: {show: true}
        },
        {
            path: "/login",
            component: Login,
            meta: {show: false}
        },
        {
            path: "/register",
            component: Register,
            meta: {show: false}
        },
        {
            path: "/search",
            component: Search,
            meta: {show: true}
        },
        {
            // 重定向到主页
            path: "/",
            redirect: "/home"
        }
    ]
})
