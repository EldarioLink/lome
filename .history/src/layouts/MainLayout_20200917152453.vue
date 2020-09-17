<template>
  <v-app>
    <Loader v-if="loading" />
    <Navbar v-else />
  </v-app>
</template>

<script>
import Navbar from "@/components/elements/Navbar.vue";
import messages from "@/common/messages";

export default {
  data: () => ({
    loading: true
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
  },
  mounted() {
    this.loading = false;
  }
};
</script>
