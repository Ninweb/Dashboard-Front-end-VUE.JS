import Vue from "vue";
import App from "./App";
import router from "./router/index";
import axios from 'axios'

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import Swal from 'sweetalert2'

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"

import store from './store/index'
// import apiRoutes from './services/config'

Vue.use(BlackDashboard);
// Vue.use(axios);
Vue.use(VueFormWizard)
window.Swal = Swal
window.axios = axios



/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  store,
  // apiRoutes,
  render: h => h(App)
}).$mount("#app");
