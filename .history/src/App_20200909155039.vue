<template>
  <div id="app">
    <component :is="layout">
      </router-view>
    </component>
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

<style>
.wallpaper-item {
  padding: 0;
  background: #be2323;
}
</style>
