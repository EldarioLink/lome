<template>
  <div>
    <div v-if="this.loading">
      <Loader />
    </div>
    <v-layout v-else-if="isFilmExist" class="column">
      <v-flex
        v-for="movie in this.likedMovies"
        :key="movie.id"
        max-width="344"
        class="md2 pr-2 pt-2"
      >
        <v-card elevation="2">
          <v-card-actions>
            <v-card-text>{{ movie.title }}</v-card-text>

            <v-btn icon @click="likerBtn(movie.likedId, movie.like)">
              <v-icon>{{
                movie.like ? "mdi-heart" : "mdi-heart-outline"
              }}</v-icon>
            </v-btn></v-card-actions
          >
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      No favorite films now. Please search and add them -
      <a @click.stop="redirectToSearch()" text color="primary">
        Search</a
      ></v-layout
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "myfilms",
  data: () => ({}),
  methods: {
    ...mapActions(["SHOW_LIKED_MOVIES"]),
    ...mapActions(["LIKE_MOVIE_FROM_COMP"]),
    likerBtn(id, like) {
      this.LIKE_MOVIE_FROM_COMP({
        like: !like,
        movieId: id
      });
    },
    redirectToSearch() {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters({ likedMovies: "getLikedMovie", loading: "getLoading" }),
    isFilmExist() {
      return this.likedMovies ? true : false;
    }
  },
  watch: {},
  mounted() {
    this.SHOW_LIKED_MOVIES();
  },
  destroyed() {}
};
</script>

<style></style>
