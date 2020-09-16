<template>
  <v-app>
    <Navbar />
  </v-app>
</template>

<script>
import Navbar from "@/components/elements/Navbar.vue";
import messages from "@/utils/messages";

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
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || "Что-то пошло не так");
    }
  }
};
</script>
