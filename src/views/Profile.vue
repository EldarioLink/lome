<template>
  <div>
    <v-sheet class="pa-5">
      <v-switch
        v-model="switch1"
        inset
        :label="`Dark mode: ${darkStatus}`"
      ></v-switch>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "proflile",
  data: () => ({
    switch1: null
  }),
  methods: {},
  computed: {
    darkStatus() {
      return this.switch1 ? "on" : "off";
    }
  },
  watch: {
    switch1(newValue) {
      this.$vuetify.theme.dark = newValue;
    }
  },
  mounted() {
    this.switch1 = this.$vuetify.theme.dark;
  },
  destroyed() {}
};
</script>

<style></style>
