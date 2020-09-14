<template>
  <div id="app">
    <component :is="layout"> </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "App",
  data: () => ({}),
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  }
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/main.sass";
//@import "~vuetify/src/styles/styles.sass";
</style>
