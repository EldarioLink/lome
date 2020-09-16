import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
//import vuetify from "./plugins/vuetify";

import vuetify from "vuetify/lib";

Vue.use(vuetify);

Vue.use(VueRouter);

Vue.config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyApWNnaz35IxgPm7jItGTBmmhuXDdPxA9g",
  authDomain: "lome-b0ead.firebaseapp.com",
  databaseURL: "https://lome-b0ead.firebaseio.com",
  projectId: "lome-b0ead",
  storageBucket: "lome-b0ead.appspot.com",
  messagingSenderId: "666332082702",
  appId: "1:666332082702:web:35d0519f1b72a009f9425f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
