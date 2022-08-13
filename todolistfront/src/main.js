import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.config.productionTip = false
// 引入路由
import router from './router'
// 应用路由
Vue.use(VueRouter);
Vue.use(ElementUI);
// 注册仓库
import store from './store';

// 将项目全部请求函数引入进来 分别暴露
import * as http from '@/api';
new Vue({
  // 配置全局事件总线
  beforeCreate() {
    // 配置全局事件总线
    // Vue.prototype.$bus = this;
    // 通过vue.prototype原型对象，将全部请求函数挂载到原型对象身上
    Vue.prototype.$http = http;
  },
  // 给项目添加仓库功能和路由功能 全部VC拥有一个$store属性 和 z$route
  store,
  router,
  render: h => h(App),
}).$mount('#app')
