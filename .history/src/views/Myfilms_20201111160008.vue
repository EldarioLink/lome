<template>
  <div>
    myfilms
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "myfilms",
  data: () => ({}),
  methods: {
    ...mapActions(["showLikedMovies"])
  },
  computed: {},
  watch: {},
  mounted() {
    this.showLikedMovies();
  },
  destroyed() {
    console.log("myfilms destroied");
  }
};
</script>

<style></style>
