import Vue from 'vue'
import VueRouter from 'vue-router'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)
//首页
import home from '../pages/home.vue'
//登录页
import login from '../pages/login.vue'

//定义
const routes = [
    { path: '/home', component: home, name: 'home' },
    { path: '/login', component: login, name: 'login' },
    // 设置默认重定向
    { path: '/', redirect: '/home' }
]
// 实例化路由
const router = new VueRouter({
    routes
})
// 暴露路由对象，为后续挂载容器做准备
export default router
