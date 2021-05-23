import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;
const API_KEY = '4c8bc95958dd9c067669abb351d5bd28';
axios.interceptors.request.use(
  config => {
    config.params = { ...config.params, api_key: API_KEY };
    return config;
  },
  error => Promise.reject(error),
);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
