import Vue from 'vue'
import App from './App.vue'
import { mixin } from "./mixin" //全局引入混合

Vue.config.productionTip = false
Vue.mixin(mixin)//全局引入混合

new Vue({
  render: h => h(App),
}).$mount('#app')
