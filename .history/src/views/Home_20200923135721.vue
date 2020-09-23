<template>
  <div>
    <v-card max-width="344" class="mx-auto">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline"
            >Our Changing Planet</v-list-item-title
          >
          <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="194"
      ></v-img>

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
        @input="next(page)"
        :length="6"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1
  }),
  methods: {
    next(page) {
      console.log(page);
      this.axios
        .get(
          "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host":
                "imdb-internet-movie-database-unofficial.p.rapidapi.com",
              "x-rapidapi-key":
                "a67b43680emshc2b8ff4a8bf27ebp149f8ejsn7963f988d678"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
