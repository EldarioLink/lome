import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

Vue.use(VueRouter);

Vue.config.productionTip = false;
const firebaseConfig = {
  // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App)
}).$mount("#app");
