<template>
  <v-app>
    <v-card color="green lighten-4" flat tile>
      <v-toolbar color="green lighten-3">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>
        <div class="pr-7">
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="teal" v-bind="attrs" v-on="on" fab dark>
                  <v-icon>mdi-account-circle</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title
                    @click.prevent="item.title === `Выйти` ? logout() : null"
                    >{{ item.title }}</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-toolbar>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Выйти" }
    ]
  }),
  methods: {
    async logout(event) {
      console.log(event);
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  computed: {},
  watch: {}
};
</script>
