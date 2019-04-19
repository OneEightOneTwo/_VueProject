import Vue from 'vue'
import VueRouter from 'vue-router'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)
//登录页
import login from '../pages/login.vue'
//首页
import home from '../pages/home.vue'
//首页下的子页
import chat from '../pages/chat.vue'
import tantan from '../pages/tantan.vue'
import dis from '../pages/discover.vue'
import userinfo from '../pages/userinfo.vue'

//定义
const routes = [
    // { path: '/home', component: home, name: 'home' },
    {
         path: '/home', component: home, name: 'home',
         children: [
            { path: 'chat', component: chat, name: 'chat'},
            { path: 'tantan', component: tantan, name: 'tantan' },
            { path: 'dis', component: dis, name: 'discover' },
            { path: 'userinfo', component: userinfo, name: 'userinfo' }
        ]
        },
    { path: '/login', component: login, name: 'login' },
    // 设置默认重定向
    { path: '/', redirect: '/home/tantan' }
]
// 实例化路由
const router = new VueRouter({
    routes
})
// 暴露路由对象，为后续挂载容器做准备
export default router
