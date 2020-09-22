<template>
  <v-sheet
    height="400"
    class="overflow-hidden"
    @click.stop="this.$emit('drawerclose')"
    style="position: relative;"
  >
    <v-navigation-drawer
      class="primary"
      v-model="value"
      dark
      absolute
      temporary
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      items: [
        { title: "Мой рейтинг", icon: "mdi-star" },
        { title: "Профиль", icon: "mdi-account-circle" }
      ]
    };
  },
  methods: {
    test() {
      console.log("rtest");
    }
  },
  computed: {}
};
</script>
