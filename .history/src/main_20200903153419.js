import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
