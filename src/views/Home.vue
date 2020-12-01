<template>
  <div>
    <div v-if="this.loading">
      <Loader />
    </div>
    <div v-if="!this.loading && this.moviesInfo">
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
              <v-btn
                @click.stop="showInfo(movie.id)"
                text
                color="deep-purple accent-4"
              >
                MORE...</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn icon @click="likerBtn(movie)">
                <v-icon>{{
                  movie.like ? "mdi-heart" : "mdi-heart-outline"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">{{}} </v-card-title>

          <v-card-text>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">
              Disagree
            </v-btn>

            <v-btn color="green darken-1" text @click="dialog = false">
              Go trailer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
    perPage: 8,
    dialog: false,
    movieInfo: {}
  }),
  methods: {
    ...mapActions(["LIKEMOVIE", "SHOW_MOVIE_INFO"]),
    likerBtn(movie) {
      console.log(movie);
      this.LIKEMOVIE({
        like: !movie.like,
        likedId: movie.id,
        likedImage: movie.image,
        title: movie.title
      });
    },
    async showInfo(movieId) {
      let moviesPie = null;
      let movieInfo = await this.SHOW_MOVIE_INFO({
        movieId
      }).then(response => {
        console.log("showed");
        moviesPie = response;
        this.dialog = true;
      });
      console.log("pie", moviesPie);
      console.log("infoMovies", movieInfo);
    }
  },
  computed: {
    ...mapGetters({ moviesInfo: "getMovie", loading: "getLoading" }),
    visiblePages() {
      return this.moviesInfo.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    }
  },
  mounted() {}
};
</script>
