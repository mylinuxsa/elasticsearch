import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '@/assets/css/reset.css'
import VueHighcharts from 'vue-highcharts';
import axios from '@/plugins/axios'


Vue.use(axios)
Vue.use(VueHighcharts);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
