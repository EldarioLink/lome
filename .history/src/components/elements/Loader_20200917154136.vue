<template>
  <v-container fill-height>
    <div class="text-center">
      <v-progress-circular
        :size="60"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
