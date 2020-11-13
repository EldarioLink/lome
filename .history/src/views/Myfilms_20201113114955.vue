<template>
  <div>
    <v-flex
      v-for="movie in this.showLikedMovies"
      :key="movie.id"
      max-width="344"
      class="md2 pr-2 pt-2 "
    >
      <v-spacer></v-spacer>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">{{
            movie.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-flex>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "myfilms",
  data: () => ({
    testMovies:
  }),
  methods: {
    ...mapActions(["showLikedMovies"])
  },
  computed: {},
  watch: {},
  mounted() {
    this.showLikedMovies();
  },
  destroyed() {}
};
</script>

<style></style>
