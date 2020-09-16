// import Vue from "vue";
// import Vuetify from "vuetify/lib";

// Vue.use(Vuetify);

// export default new Vuetify({});

import Vue from "vue";
import Vuetify, { VSnackbar } from "vuetify/lib";
import VuetifyToast from "vuetify-toast-snackbar";

Vue.use(Vuetify, {
  components: {
    VSnackbar
  }
});

Vue.use(VuetifyToast);

// export default new Vuetify({});
