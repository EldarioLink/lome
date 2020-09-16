import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
//import toastOptions from "./common/message.plugin.options";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import vuetify from "./plugins/vuetify";

import VuetifyToast from "vuetify-toast-snackbar";

Vue.use(VuetifyToast);

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
      //  vuetify,
      Vuetify,

      VuetifyToast,
      render: h => h(App)
    }).$mount("#app");
  }
});
