<template>
  <div>
    <div v-if="!this.moviesInfo">Not Search</div>
    <div v-else>
      <v-card
        v-for="movie in this.visiblePages"
        :key="movie.id"
        max-width="344"
        class="mx-auto"
      >
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{
              movie.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-img :src="movie.image" height="194"></v-img>

        <v-card-text>
          Visit ten places on our planet that are undergoing the biggest changes
          today.
        </v-card-text>

        <v-card-actions>
          <v-btn text color="deep-purple accent-4">
            Read
          </v-btn>
          <v-btn text color="deep-purple accent-4">
            Bookmark
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <div class="text-center">
        <v-pagination
          color="primary"
          v-model="page"
          :length="Math.ceil(this.data.length / perPage)"
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
    perPage: 4
  }),
  methods: {
    // ...mapActions(["searchMovie"])
  },
  computed: {
    ...mapGetters({ moviesInfo: getMovie }),
    moviesInfo() {
      console.log(this.getMovie);
      return this.getMovie.titles;
    },
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
