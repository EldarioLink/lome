<template>
  <div>
    <div
      class="text-center"
      layout="row"
      layout-sm="column"
      layout-align="center center"
      aria-label="wait"
    >
      <v-progress-circular
        :size="60"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </div>
</template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
