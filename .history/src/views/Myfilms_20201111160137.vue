<template>
  <div>
    <v-flex
      v-for="movie in this.showLikedMovies"
      :key="movie.id"
      max-width="344"
      class="md2 pr-2 pt-2 "
    >
      <v-spacer></v-spacer>
      <v-card>
        <v-img :src="movie.image" height="194"></v-img>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">{{
              movie.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">
            Подробнее
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>{{
              movie.like ? "mdi-heart" : "mdi-heart-outline"
            }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "myfilms",
  data: () => ({}),
  methods: {
    ...mapActions(["showLikedMovies"])
  },
  computed: {},
  watch: {},
  mounted() {
    this.showLikedMovies();
  },
  destroyed() {
    console.log("myfilms destroied");
  }
};
</script>

<style></style>
