<template>
  <div class="text-center">
    <v-pagination
      color="primary"
      v-model="page"
      @input="next(page)"
      :length="6"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1
  }),
  methods: {
    next(page) {
      axios(
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
