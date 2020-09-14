<template>
  <v-app>
    <v-card color="green lighten-4" flat tile>
      <v-toolbar color="green lighten-3">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click.prevent="logout">
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <span class="material-icons">
            alarm_on
          </span>
          <v-icon>alarm_on</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  </v-app>
</template>

<script>
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
