import Vue from "vue"
import store from "./store/index"
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	store,
	beforeCreate() {
		Vue.prototype.$bus = this;
	}
}).$mount('#app')
