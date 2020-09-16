<template>
  <v-app>
    <Navbar />
  </v-app>
</template>

<script>
import Navbar from "@/components/elements/Navbar.vue";

export default {
  data: () => ({
    loading: false
  }),
  components: {
    Navbar
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {}
};
</script>
