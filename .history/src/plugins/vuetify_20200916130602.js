import Vue from "vue";
import Vuetify, { VIcon, VSnackbar } from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    // the components which Toast.vue used
    VIcon,
    VSnackbar
  }
});
