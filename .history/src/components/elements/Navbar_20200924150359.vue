<template>
  <!-- <v-app-bar app clipped-left>
    <v-card >
      <v-toolbar color="green lighten-3"> -->
  <v-app-bar color="green lighten-4" app clipped-left>
    <v-app-bar-nav-icon @click.prevent="$emit('drawer')"></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>
    <v-icon>mdi-spin</v-icon>
    <v-spacer></v-spacer>
    <v-text-field
      flat
      solo
      background-color="blue-grey lighten-4"
      hide-details
      color="grey"
      prepend-inner-icon="mdi-magnify"
      label="Найти фильм"
      class="hidden-sm-and-down"
    ></v-text-field>
    <div class="pa-2">
      <v-btn @click="search(movieName)" dark block>Поиск</v-btn>
    </div>
  </v-app-bar>
  <!-- </v-toolbar>
    </v-card>  -->
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  data: () => ({
    loading: false,
    items: []
  }),
  methods: {
    ...mapActions(["getMovie"]),
    search() {
      this.getMovie(movieName);
    }
  },
  computed: {},
  watch: {}
};
</script>

<style></style>
