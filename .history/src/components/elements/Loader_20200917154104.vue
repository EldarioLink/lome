<template>
  <div class="text-center">
    <v-progress-circular
      :size="60"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
        <v-btn>test</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
