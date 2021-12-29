
import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)

// actions响应一切动作，业务逻辑写在这里
// context是数据的上下文，value是传过来的值
const actions = {
    odd(context, value) {
        // console.log("actions", context)
        if (context.state.sum % 2) context.commit("ADD", value)
    },
    wait(context, value) {
        // console.log("wait start")
        setTimeout(() => { context.commit("ADD", value) }, 1000)
    }
}

// mutations用于操作数据state
const mutations = {
    ADD(state, value) {
        // console.log("mutations", state)
        state.sum += value
    },
    SUB(state, value) {
        state.sum -= value
    },
}
// state用于存储数据
const state = {
    sum: 0,
    companyName: "四部曲",
    departmentName: "研发部"

}
// 当state的值需要加工时使用getters
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})