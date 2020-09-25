<template>
  <div>
    <div v-if="!this.getMovies">Not Search</div>
    <div v-else>
      <v-card
        v-for="movie in this.getMovies.data.titles"
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
          @input="next(page)"
          v-model="page"
          :length="6"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    page: 1,
    data: null,
    loading: true
  }),
  methods: {
    ...mapActions(["searchMovie"]),
    next(page) {
      console.log(this.getMovie);

      console.log(page);
    }
  },
  computed: {
    ...mapGetters(["getMovie"]),
    getMovies() {
      return this.getMovie;
    }
  },
  mounted() {
    console.log("mountedHOME");
  }
};
</script>
