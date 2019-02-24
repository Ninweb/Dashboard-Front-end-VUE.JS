import Vue from "vue";
import App from "./App";
import router from "./router/index";
import axios from 'axios'

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"

import store from './store/index'


Vue.use(BlackDashboard);
// Vue.use(axios);
Vue.use(VueFormWizard)
window.axios = axios



/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
