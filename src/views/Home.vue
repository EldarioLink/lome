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
      <v-dialog v-model="dialog" max-width="490">
        <v-card v-if="this.dialogInfo">
          <v-card-title>
            {{ this.dialogInfo.title || "нет данных" }}
          </v-card-title>

          <v-card-text>
            {{ this.dialogInfo.plot }}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              :href="this.dialogInfo.trailer.link"
              target="_blank"
            >
              {{ this.dialogInfo.trailer.link || "нет данных" }}
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else> "Пока данных нет" </v-card>
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
    dialogInfo: null
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
      this.dialogInfo = await this.SHOW_MOVIE_INFO(movieId);
      this.dialog = true;
    }
  },
  computed: {
    ...mapGetters({ moviesInfo: "getMovie", loading: "getLoading" }),
    visiblePages() {
      return this.moviesInfo.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
    isOpen() {
      return this.dialog && !!this.dialogInfo;
    }
  },
  mounted() {}
};
</script>
