import Vue from 'vue'
import Router from 'vue-router'

//安装路由
Vue.use(Router)

import login from '../views/login/login'
import home from '../views/home/home'


//配置路由
export default new Router({
    routes: [
        {
            //路由路径
            path: '/login',
            //路由名称
            name: 'login',
            //跳转到组件
            component: login

        },
        {
            //路由路径
            path: '/home',
            //路由名称
            name: 'home',
            //跳转到组件
            component: home

        }
    ]
});
