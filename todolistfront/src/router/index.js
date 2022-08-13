// 引入 router包
import VueRouter from 'vue-router';

// 引入跳转组件
import home from '../pages/home'
import explain from '../pages/explain'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: home
        },
        {
            path: '/explain',
            component: explain
        }]
})