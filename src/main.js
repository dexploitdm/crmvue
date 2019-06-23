import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import 'materialize-css/dist/js/materialize'
import messagePlugin from '@/utils/message.plugin'

Vue.config.productionTip = false;
Vue.filter('date', dateFilter);
Vue.use(Vuelidate);
Vue.use(messagePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
