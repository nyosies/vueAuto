import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/util/config'

// console.log(config)
Vue.config.productionTip = false
 
// Vue.use(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
