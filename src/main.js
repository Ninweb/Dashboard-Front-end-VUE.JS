import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueRouter from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import routes from './routes'

Vue.use(VueRouter)
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
