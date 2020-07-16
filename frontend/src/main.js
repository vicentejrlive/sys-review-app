import Vue from 'vue'
import App from './App.vue'
import router from '@/config/router'
import store from '@/config/store'
import bootstrap from '@/config/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  bootstrap,
  render: h => h(App)
}).$mount('#app')
