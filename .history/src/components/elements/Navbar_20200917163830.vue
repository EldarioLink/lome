<template>
  <v-app>
    <v-card color="green lighten-4" flat tile>
      <v-toolbar color="green lighten-3">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>
        <v-icon>mdi-spin</v-icon>
        <v-spacer></v-spacer>
        <div class="text-center pr-7">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                USER
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click.prevent="clickHandler(item.title)"
              >
                <v-icon class="pr-5">{{ item.icon }}</v-icon>

                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-toolbar>
    </v-card>
  </v-app>
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
      this.$router.push("/login");
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
