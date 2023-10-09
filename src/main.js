import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap";
import { BootstrapVue } from 'bootstrap-vue'
import "bootstrap";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
