// import Vue from "vue";
// import Vuetify from "vuetify/lib";

// Vue.use(Vuetify);

// export default new Vuetify({});
import Vue from "vue";
import Vuetify, { VSnackbar, VBtn, VIcon } from "vuetify/lib";
import VuetifyToast from "vuetify-toast-snackbar";

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
});

Vue.use(VuetifyToast);
