// 仓库
import Vue from "vue";
import Vuex from 'vuex';

// 安装插件
Vue.use(Vuex);

// 引入小仓库
import home from "./home";

// 对外暴露仓库
export default new Vuex.Store({
    modules: {
        home,
    }
})