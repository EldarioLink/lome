import Vue from "vue";
import Vuetify, { VSnackbar, VBtn, VIcon } from "vuetify/lib";
import VuetifyToast from "vuetify-toast-snackbar-ng";

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
});
const opts = {}; // your options

const vueObj = new Vuetify(opts);

export default vueObj;

Vue.use(VuetifyToast, {
  x: "bottom", // default
  y: "bottom", // default
  color: "gray", // default
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
