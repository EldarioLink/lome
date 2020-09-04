<template>
  <div>
    Login
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {}
};
</script>
