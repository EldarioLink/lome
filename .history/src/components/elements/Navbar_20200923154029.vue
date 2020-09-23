<template>
  <!-- <v-app-bar app clipped-left>
    <v-card >
      <v-toolbar color="green lighten-3"> -->
  <v-app-bar color="green lighten-4" app clipped-left>
    <v-app-bar-nav-icon @click.prevent="$emit('drawer')"></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>
    <v-icon>mdi-spin</v-icon>
    <v-spacer></v-spacer>

    <!-- <div class="pr-5">
      <v-autocomplete
        class="mx-4"
        dark
        rounded
        hide-no-data
        hide-details
        label="Какой фильм ищем?"
        solo-inverted
      ></v-autocomplete> -->
      <v-autocomplete
style="background:rgba(0,0,0,0)"
v-model="select"
:items="states"
:loading="isLoading"
:search-input.sync="search"
color="white"
hide-no-data
hide-selected
item-text="Description"
item-value="state"
label="States"
placeholder="Start typing to Search"
prepend-icon="mdi-database-search"
return-object
>
</v-autocomplete>
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
