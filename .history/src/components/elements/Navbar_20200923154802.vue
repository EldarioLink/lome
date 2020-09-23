<template>
  <!-- <v-app-bar app clipped-left>
    <v-card >
      <v-toolbar color="green lighten-3"> -->
  <v-app-bar color="green lighten-4" app clipped-left>
    <v-app-bar-nav-icon @click.prevent="$emit('drawer')"></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>
    <v-icon>mdi-spin</v-icon>
    <v-spacer></v-spacer>

    <div class=" text-center pr-5">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field label="Regular"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                label="Regular"
                placeholder="Placeholder"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field label="Solo" solo></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                label="Solo"
                placeholder="Placeholder"
                solo
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field label="Filled" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                label="Filled"
                placeholder="Placeholder"
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field label="Outlined" outlined></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                label="Outlined"
                placeholder="Placeholder"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </v-app-bar>
  <!-- </v-toolbar>
    </v-card>  -->
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    loading: false,
    items: [],
    search: null,
    select: null
  }),
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style></style>
