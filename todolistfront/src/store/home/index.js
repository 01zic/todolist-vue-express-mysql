import Vue from "vue";

//存储数据
let state = {
    // 页面item的数据
    homeItems: [],
}
// 修改仓库数据
let mutations = {
    // 设置数据
    SETHOMEITEMS(state, homeItems) {
        state.homeItems = homeItems;
    },

}

// 处理业务逻辑
let actions = {
    async getHomeItems({ commit }) {
        let allResult = await Vue.prototype.$http.reqAllItem();
        if (allResult.code == 1) {
            commit('SETHOMEITEMS', allResult.result);
        } else {
            alert('获取失败');
        }
    },
    async addHomeItems({ commit }, value) {
        let allResult = await Vue.prototype.$http.reqAddItem(value);
        if (allResult.code == 3) {
            commit('SETHOMEITEMS', allResult.result);
        } else {
            alert('添加失败');
        }
    },

    async updateHomeItems({ commit }, { id, value, done }) {
        let allResult = await Vue.prototype.$http.reqUpdateItem(id, value, done);
        if (allResult.code == 4) {
            commit('SETHOMEITEMS', allResult.result);
        } else {
            alert('更新失败')
        }
    },
    async deleteHomeItems({ commit }, id) {
        let allResult = await Vue.prototype.$http.reqDeleteItem(id);
        if (allResult.code == 5) {
            commit('SETHOMEITEMS', allResult.result);
        } else {
            alert('删除失败')
        }

    }
}

// 对获取的数据进行处理
let getters = {
    completed(state) {
        return state.homeItems.filter(item => {
            return item.done == 1 && item.delete_time == null;
        })
    },
    incompleted(state) {
        return state.homeItems.filter(item => {
            return item.done == 0;
        })
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
}