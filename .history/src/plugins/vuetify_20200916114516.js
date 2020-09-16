import Vue from "vue";
import Vuetify, { VSnackbar, VBtn, VIcon } from "vuetify/lib";
import VuetifyToast from "vuetify-toast-snackbar";

Vue.use(Vuetify);
Vue.use(VuetifyToast, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
});

export default new Vuetify({});
