<template>
  <!-- <v-app-bar app clipped-left>
    <v-card >
      <v-toolbar color="green lighten-3"> -->
  <v-app-bar color="green lighten-4" app clipped-left>
    <v-app-bar-nav-icon @click.prevent="$emit('drawer')"></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>
    <v-icon>mdi-spin</v-icon>
    <v-spacer></v-spacer>

    <div class="text-center pr-7">
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        dark
        flat
        rounded
        hide-details
        label="Какой фильм ищем?"
        solo-inverted
      ></v-autocomplete>
    </div>
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
