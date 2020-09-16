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
  created() {}
};
</script>

<style lang="scss" scoped>
.custom-class {
  background: green;
}
</style>
