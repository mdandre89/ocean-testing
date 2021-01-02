import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-186274846-1',
  router
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
