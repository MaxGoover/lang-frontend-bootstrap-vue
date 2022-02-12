import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import Notifications from 'vue-notification'
import router from './router/index'
import store from './store/index'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { i18n } from './i18n/index'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Notifications)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
