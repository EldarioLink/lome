<template>
  <v-sheet height="400" class="overflow-hidden" style="position: relative;">
    <v-navigation-drawer
      class="primary"
      v-model="value"
      dark
      absolute
      temporary
      style="height:100%"
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
    <!-- </v-card> -->
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
  methods: {},
  computed: {}
};
</script>
