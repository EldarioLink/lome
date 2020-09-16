import Vue from "vue";
import Vuetify, { VIcon, VSnackbar } from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    // the components which Toast.vue used
    VIcon,
    VSnackbar
  }
});

export default new Vuetify();
