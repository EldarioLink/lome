<template>
  <!-- <v-card class="mx-auto" height="400" width="256">
    <v-navigation-drawer class="blue accent-3" v-model="drawer" dark permanent>
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
  </v-card> -->

  <v-sheet height="400" class="overflow-hidden" style="position: relative;">
    <v-navigation-drawer class="blue accent-3" v-model="drawer" dark permanent>
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
// export default {
//   props: ["value"],
//   data() {
//     return {
//       drawer: this.value,
//       items: [
//         { title: "Мой рейтинг", icon: "mdi-star" },
//         { title: "Account", icon: "mdi-account-circle" }
//       ]
//     };
//   },
//   computed: {}
// };
</script>
