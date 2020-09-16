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

const vueObj = new Vuetify(opts);

export default vueObj;

Vue.use(VuetifyToast, { $vuetify: vueObj.framework });



export default new Vuetify({});
