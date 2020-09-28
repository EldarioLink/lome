<template>
  <div>
    <div v-if="!this.moviesInfo">Not Search</div>
    <div v-else>
      <v-layout>
        <v-flex
          v-for="movie in visiblePages"
          :key="movie.id"
          max-width="344"
          class="md2 pr-2 d-flex justify-center mb-6"
        >
          <v-spacer></v-spacer>
          <v-card class="d-flex justify-center mb-6">
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
                <v-btn icon @click="like = !like">
                  <v-icon>{{ liker }}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
        </v-flex>
      </v-layout>

      <div class="text-center pt-5">
        <v-pagination
          color="primary"
          v-model="page"
          :length="Math.ceil(films.length / perPage)"
        ></v-pagination>
        <!-- 
            <v-pagination
          color="primary"
          v-model="page"
          :length="Math.ceil(this.moviesInfo.titles.length / perPage)"
        ></v-pagination> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    page: 1,
    loading: true,
    perPage: 4,
    like: false,
    films: [
      {
        id: "tt04110048",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost"
      },
      {
        id: "tt04110308",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost1"
      },
      {
        id: "tt04115008",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost2"
      },
      {
        id: "tt04110608",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost3"
      },
      {
        id: "tt04110708",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost4"
      },
      {
        id: "tt04181008",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost5"
      },
      {
        id: "tt04191008",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost6"
      },
      {
        id: "tt04101008",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost7"
      },
      {
        id: "tt041100008",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost8"
      },
      {
        id: "tt041188008",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost9"
      },
      {
        id: "tt041771008",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost10"
      },
      {
        id: "66666",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Los1t1"
      },
      {
        id: "tt041551008",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost12"
      },
      {
        id: "444",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost13"
      },
      {
        id: "tt043110038",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost14"
      },
      {
        id: "tt041175008",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg",
        title: "Lost15"
      }
    ]
  }),
  methods: {},
  computed: {
    ...mapGetters({ moviesInfo: "getMovie" }),
    visiblePages() {
      return this.films.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
    liker() {
      return this.like ? "mdi-heart" : "mdi-heart-outline";
    }
  },
  mounted() {}
};
</script>
