<template>
  <!-- <v-app-bar app clipped-left>
    <v-card >
      <v-toolbar color="green lighten-3"> -->
  <v-app-bar color="blue lighten-2" app clipped-left>
    <v-app-bar-nav-icon @click.prevent="$emit('drawer')"></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>
    <v-icon>mdi-spin</v-icon>
    <v-spacer></v-spacer>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
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
