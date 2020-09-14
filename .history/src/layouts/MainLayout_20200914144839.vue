<template>
  <v-app>
    <Navbar />
  </v-app>
</template>

<script>
import Navbar from "@/components/app/Navbar.vue";

export default {
  data: () => ({
    loading: false
  }),
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  computed: {},
  watch: {}
};
</script>
