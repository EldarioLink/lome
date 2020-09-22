<template>
  <v-app>
    <Loader v-if="loading" />
    <div v-else>
      <Navbar @drawer="isOpen = !isOpen" />
      <Sidebar :value="isOpen" />

      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
        >asdfasdf
      </v-app-bar>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/elements/Navbar.vue";
import Sidebar from "@/components/elements/Sidebar.vue";

import messages from "@/common/messages";

export default {
  data: () => ({
    loading: true,
    isOpen: false
  }),
  components: {
    Navbar,
    Sidebar
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
