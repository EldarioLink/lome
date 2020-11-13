<template>
  <div>
    jfjfj
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
        title: "Lost"
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
