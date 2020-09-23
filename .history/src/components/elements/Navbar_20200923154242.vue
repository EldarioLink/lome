<template>
  <!-- <v-app-bar app clipped-left>
    <v-card >
      <v-toolbar color="green lighten-3"> -->
  <v-app-bar color="green lighten-4" app clipped-left>
    <v-app-bar-nav-icon @click.prevent="$emit('drawer')"></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>
    <v-icon>mdi-spin</v-icon>
    <v-spacer></v-spacer>

    <v-col cols="12" sm="6">
      <v-text-field label="Outlined" single-line outlined></v-text-field>
    </v-col>
  </v-app-bar>
  <!-- </v-toolbar>
    </v-card>  -->
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    loading: false,
    items: [],
    search: null,
    select: null
  }),
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style></style>
