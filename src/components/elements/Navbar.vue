<template>
  <v-app-bar color="green lighten-4" app clipped-left>
    <v-app-bar-nav-icon @click.prevent="$emit('drawer')"></v-app-bar-nav-icon>

    <v-toolbar-title>LovedMovie</v-toolbar-title>
    <v-icon>mdi-spin</v-icon>
    <v-spacer></v-spacer>
    <v-layout v-show="this.showInputFields">
      <v-text-field
        v-model="movieName"
        background-color="blue-grey lighten-4"
        hide-details
        solo
        prepend-inner-icon="mdi-magnify"
        label="Search movie"
        class="hidden-sm-and-down"
      ></v-text-field>
      <div class="pa-2">
        <v-btn @click="search(movieName)" dark block>Search</v-btn>
      </div>
    </v-layout>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  data: () => ({
    loading: false,
    data: null,
    movieName: null
  }),
  methods: {
    ...mapActions(["FETCH_MOVIE"]),
    search(name) {
      if (!name) return;
      this.data = this.FETCH_MOVIE(name);
    }
  },
  computed: {
    showInputFields() {
      return this.$route.name === "Home" ? true : false;
    }
  },
  watch: {}
};
</script>

<style></style>
