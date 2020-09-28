<template>
  <div>
    <div v-if="!this.moviesInfo">Not Search</div>
    <div v-else>
      <!-- <v-layout>
        <v-flex
          v-for="movie in this.visiblePages"
          :key="movie.id"
          max-width="344"
          class="md2 pr-2"
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
              <v-btn icon @click="like = !like">
                <v-icon>{{ liker }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout> -->

      <v-container
        v-for="align in alignments"
        :key="align"
        class="grey lighten-5 mb-6"
      >
        <v-row :align="align" no-gutters style="height: 150px;">
          <v-col v-for="n in 3" :key="n">
            <v-card class="pa-2" outlined tile>
              One of three columns
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="text-center pt-5">
        <v-pagination
          color="primary"
          v-model="page"
          :length="Math.ceil(this.moviesInfo.titles.length / perPage)"
        ></v-pagination>
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
    like: false
  }),
  methods: {},
  computed: {
    ...mapGetters({ moviesInfo: "getMovie" }),
    visiblePages() {
      return this.moviesInfo.titles.slice(
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
