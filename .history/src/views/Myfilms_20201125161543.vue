<template>
  <div>
    <div v-if="this.loading">
      <Loader />
    </div>
    <v-layout v-if="!this.loading && this.likedMovies" class="column">
      fdf
      <v-flex
        v-for="movie in this.likedMovies"
        :key="movie.id"
        max-width="344"
        class="md2 pr-2 pt-2 "
      >
        <v-card elevation="2">
          <v-card-actions>
            <v-card-text>{{ movie.title }}</v-card-text>
            <v-btn icon>
              <v-icon>{{
                movie.like ? "mdi-heart" : "mdi-heart-outline"
              }}</v-icon>
            </v-btn></v-card-actions
          >
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "myfilms",
  data: () => ({}),
  methods: {
    ...mapActions(["SHOW_LIKED_MOVIES"])
  },
  computed: {
    ...mapGetters({ likedMovies: "getLikedMovie", loading: "getLoading" })
  },
  watch: {},
  mounted() {
    this.SHOW_LIKED_MOVIES();
  },
  destroyed() {}
};
</script>

<style></style>
