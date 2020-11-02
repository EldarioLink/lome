<template>
  <div>
    <div v-if="!this.moviesInfo">
      <!-- <Loader /> -->
    </div>
    <div v-else>
      <v-layout class="d-flex  flex-wrap justify-center mb-6">
        <v-flex
          v-for="movie in visiblePages"
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
              <v-btn icon @click="likerBtn(movie.id)">
                <v-icon>{{
                  movie.like ? "mdi-heart" : "mdi-heart-outline"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <div class="text-center pt-5">
        <v-pagination
          color="primary"
          v-model="page"
          :length="Math.ceil(this.moviesInfo.length / perPage)"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    page: 1,
    loading: true,
    perPage: 8,
    like: false
  }),
  methods: {
    ...mapActions(["updateFavoriteMovie"]),
    likerBtn(movieId) {
      this.movie.like = !this.movie.like;
      this.updateFavoriteMovie({
        like: "false",
        movieId
      });
    }
  },
  computed: {
    ...mapGetters({ moviesInfo: "getMovie" }),
    visiblePages() {
      console.log(this.moviesInfo);
      return this.moviesInfo.slice(
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
