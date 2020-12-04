<template>
  <v-navigation-drawer
    v-model="value"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list>
      <template v-for="item in items">
        <v-list-item
          :key="item.text"
          link
          @click.prevent="clickHandler(item.title)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      items: [
        { title: "Movies library", icon: "mdi-home" },
        { title: "My movies", icon: "mdi-star" },
        { title: "Profile", icon: "mdi-account-circle" },
        { title: "Exit", icon: "mdi-exit-to-app" }
      ]
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    },
    async clickHandler(title) {
      if (title === "Exit") {
        const res = await this.$dialog.confirm({
          text: "Are you sure?",
          title: "Warning",
          persistent: false
        });
        res ? this.logout() : null;
      } else if (title === "My movies" && this.$route.path !== "/myfilms") {
        this.$router.push("/myfilms");
      } else if (title === "Profile" && this.$route.path !== "/profile") {
        this.$router.push("/profile");
      } else if (title === "Movies library" && this.$route.path !== "/") {
        this.$router.push("/");
      }
    }
  },
  computed: {}
};
</script>
