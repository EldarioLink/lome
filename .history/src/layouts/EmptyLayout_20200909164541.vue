<template>
  <v-app>
    <div class="empty-wallpaper">
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  computed: {},
  watch: {}
};
</script>

<style scoped>
/* prettier-ignore */
>>> div {
  background: red;
}
</style>
