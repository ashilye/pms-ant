// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'


//导入路由配置表
import router from './router'
//导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//使用路由
Vue.use(VueRouter)
//使用ElementUI
Vue.use(ElementUI)
//使用axios
Vue.use(VueAxios,axios)





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
