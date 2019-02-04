import Vue from 'vue'

// Archivos
import routes from './routes'
import App from './App.vue'

// Otras dependencias
import axios from 'axios'
import VueRouter from 'vue-router'

// Bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel'

// Form wizard
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import VueResource from 'vue-resource'//vue resource nos permite obtener datos de manera remota
import babelPolyfill from 'babel-polyfill'

Vue.use(VueRouter)
Vue.use(VueResource);//implementando la dependencia
Vue.use(BootstrapVue)
Vue.component('b-carousel', bCarousel)
Vue.use(axios)
Vue.use(babelPolyfill)

Vue.use(VueFormWizard)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
