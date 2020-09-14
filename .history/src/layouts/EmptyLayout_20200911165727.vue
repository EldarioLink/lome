<template>
  <v-app class="black-back">
    <router-view />
  </v-app>
</template>

<script>
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
