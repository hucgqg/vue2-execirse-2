export default {
    namespaced: true, // 如果这里不写count.vue里的 mapStore无法正常获取countAbout
    actions: {
        odd(context, value) {
            // console.log("actions", context)
            if (context.state.sum % 2) context.commit("ADD", value)
        },
        wait(context, value) {
            // console.log("wait start")
            setTimeout(() => { context.commit("ADD", value) }, 1000)
        }
    },
    mutations: {
        ADD(state, value) {
            // console.log("mutations", state)
            state.sum += value
        },
        SUB(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        companyName: "四部曲",
        departmentName: "研发部",


    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
