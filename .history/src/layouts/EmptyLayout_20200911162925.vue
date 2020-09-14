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
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss" scoped></style>
