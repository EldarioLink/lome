<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import messages from "@/common/messages";

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    // error(fbError) {
    //   this.$error(messages[fbError.code] || "Что-то пошло не так");
    // }
  }
};
</script>

<style lang="scss" scoped>
.custom-class {
  background: green;
}
</style>
