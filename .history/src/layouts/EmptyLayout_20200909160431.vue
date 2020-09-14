<template>
  <div id="wallpaper-item">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {},
  watch: {}
};
</script>

<style lang="scss">
#wallpaper-item {
  padding: 0;
  $color: red;
  background: $color;
}
</style>
