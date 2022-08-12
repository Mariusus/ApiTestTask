import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/router.ts'
import { BootstrapVue } from 'bootstrap-vue'
import { createPopper } from '@popperjs/core';

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(router)
Vue.use(createPopper)
import PortalVue from 'portal-vue'

Vue.use(PortalVue)

Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
}).$mount('#app')
