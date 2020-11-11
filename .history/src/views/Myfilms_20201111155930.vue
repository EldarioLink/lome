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
    ...mapActions(["updateFavoriteMovie"])
  },
  computed: {},
  watch: {},
  mounted() {
    console.log("myfilms mounted");
  },
  destroyed() {
    console.log("myfilms destroied");
  }
};
</script>

<style></style>
