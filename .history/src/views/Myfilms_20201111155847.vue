<template>
  <div>
    myfilms
  </div>
</template>

<script>
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
