import '@/assets/css/main.css';
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store/store'
import titleMixin from './mixins/titleMixin'
import Vue from 'vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.mixin(titleMixin)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')