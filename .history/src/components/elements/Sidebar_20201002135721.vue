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
        { title: "Профиль", icon: "mdi-account-circle" },
        { title: "Мои фильмы", icon: "mdi-star" },
        { title: "Выйти", icon: "mdi-exit-to-app" }
      ]
    };
  },
  methods: {
    async logout(event) {
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
  computed: {}
};
</script>
