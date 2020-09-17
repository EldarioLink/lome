<template>
  <div class="text-center custom-class">
    <div>
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
.custom-class {
  margin: 0 auto;
  top: 50%;
}
.v-progress-circular {
  margin: 1rem;
}
</style>
