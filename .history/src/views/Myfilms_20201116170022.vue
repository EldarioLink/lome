<template>
  <div>
    <v-layout class="column">
      <v-flex
        v-for="movie in this.testMovies"
        :key="movie.id"
        max-width="344"
        class="md2 pr-2 pt-2 "
      >
        <v-card elevation="2">
          <v-card-actions> </v-card-actions>
          <v-list-item>
            {{ movie.title }}
          </v-list-item>
          <v-btn icon>
            <v-icon>{{
              movie.like ? "mdi-heart" : "mdi-heart-outline"
            }}</v-icon>
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "myfilms",
  data: () => ({
    testMovies: [
      {
        id: "tt0411008",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        like: true,
        title: "Lost"
      },
      {
        id: "tt8802088",
        image:
          "https://m.media-amazon.com/images/M/MV5BYWY0ZDg3NDgtODE5NC00ZDYxLWI2MzYtMjE2N2U2NGJmNTRiXkEyXkFqcGdeQXVyNzY4NDQzNTg@.jpg",
        like: false,
        title: "Sesat: Yang Sudah Pergi Jangan Dipanggil Lagi"
      },
      {
        id: "tt0406942",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjE4NTA4NzQ4NF5BMl5BanBnXkFtZTcwMjIwOTEzMQ@@.jpg",
        like: true,
        title: "Lost2"
      }
    ]
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
