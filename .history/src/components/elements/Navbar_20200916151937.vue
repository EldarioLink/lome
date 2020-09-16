<template>
  <v-app>
    <v-card color="green lighten-4" flat tile>
      <v-toolbar color="green lighten-3">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn @click="this.test"></v-btn>
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
    items: [{ title: "1" }, { title: "2" }, { title: "3" }, { title: "Выйти" }]
  }),
  methods: {
    async logout(event) {
      console.log(event);
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    clickHandler(title) {
      if (title === "Выйти") {
        this.logout();
      }
    },
    test() {
      this.$toast("Custom options", {});
    }
  },
  computed: {},
  watch: {}
};
</script>

<style></style>
