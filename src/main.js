import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-186274846-1',
  router
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
