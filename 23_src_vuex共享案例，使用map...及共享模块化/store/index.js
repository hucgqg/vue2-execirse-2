
import Vue from "vue"
import Vuex from "vuex"
import countsOption from "./counts"
import personsOption from "./persons"

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        countAbout: countsOption,
        personAbout: personsOption
    }
})