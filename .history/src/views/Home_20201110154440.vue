<template>
  <div>
    <div v-if="this.loading">
      <!-- <Loader /> -->
    </div>
    <div v-if="this.loading">
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
              <v-btn icon @click="likerBtn(movie.id, movie.like)">
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
    perPage: 8
  }),
  methods: {
    ...mapActions(["updateFavoriteMovie"]),
    likerBtn(id, like) {
      this.updateFavoriteMovie({
        like: !like,
        movieId: id
      });
    }
  },
  computed: {
    ...mapGetters({ moviesInfo: "getMovie", loading: "getLoading" }),
    visiblePages() {
      console.log(this.moviesInfo);
      return this.moviesInfo.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    }
  },
  mounted() {}
};
</script>
