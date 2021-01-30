import '@/assets/css/main.css';
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store/store'
import Vue from 'vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')