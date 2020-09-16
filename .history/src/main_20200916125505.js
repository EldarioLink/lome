import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import vuetify from "./plugins/vuetify";

import VuetifyToast from "vuetify-toast-snackbar";

Vue.use(VuetifyToast, {
  x: "right", // default
  y: "bottom", // default
  color: "info", // default
  icon: "info",
  iconColor: "", // default
  classes: ["body-2"],
  timeout: 3000, // default
  dismissable: true, // default
  multiLine: false, // default
  vertical: false, // default
  queueable: false, // default
  showClose: false, // default
  closeText: "", // default
  closeIcon: "close", // default
  closeColor: "", // default
  slot: [], //default
  shorts: {
    custom: {
      color: "purple"
    }
  },
  property: "$toast" // default
});
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
