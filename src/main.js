import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store/'
import dateFilter from '@/filters/date.filter'
import 'materialize-css/dist/js/materialize'
import messagePlugin from '@/utils/message.plugin'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;
Vue.filter('date', dateFilter);
Vue.use(Vuelidate);
Vue.use(messagePlugin);

firebase.initializeApp({
    apiKey: "AIzaSyAO7zejokxScU_yXPm-24fWbNmVAQZgWcw",
    authDomain: "crmvue.firebaseapp.com",
    databaseURL: "https://crmvue.firebaseio.com",
    projectId: "crmvue",
    storageBucket: "crmvue.appspot.com",
    messagingSenderId: "845300864928",
    appId: "1:845300864928:web:15910d6c1bb0d21d"
});
let app;
firebase.auth().onAuthStateChanged(() => {
    if(!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
    }
});
