import Vue from 'vue';
import App from './App';

Vue.component('icon', Icon)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
