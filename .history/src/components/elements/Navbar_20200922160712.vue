<template>
  <!-- <v-app-bar app clipped-left>
    <v-card color="green lighten-4" flat tile>
      <v-toolbar color="green lighten-3"> -->
  <!-- <v-app-bar app clipped-left>  
  <v-app-bar-nav-icon @click.prevent="$emit('drawer')"></v-app-bar-nav-icon>

  <v-toolbar-title>Title</v-toolbar-title>
  <v-icon>mdi-spin</v-icon>
  <v-spacer></v-spacer>
  <div class="text-center pr-7">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon class="mdi-48px">mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click.prevent="clickHandler(item.title)"
        >
          <v-icon class="pr-2">{{ item.icon }}</v-icon>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  <!-- </v-toolbar>
    </v-card>
  </v-app-bar> -->
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    loading: false,
    items: [
      { title: "Профиль", icon: "mdi-account-circle" },
      { title: "Мой рейтинг", icon: "mdi-star" },
      { title: "Выйти", icon: "mdi-exit-to-app" }
    ]
  }),
  methods: {
    async logout(event) {
      console.log(event);
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    },
    async clickHandler(title) {
      if (title === "Выйти") {
        const res = await this.$dialog.confirm({
          text: "Вы действительно хотите выйти?",
          title: "Предупреждение",
          persistent: false
        });
        res ? this.logout() : null;
      }
    }
  },
  computed: {},
  watch: {}
};
</script>

<style></style>
