<template>
  <div class="text-center">
    <v-pagination
      color="primary"
      v-model="page"
      @input="next(this.page)"
      :length="6"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1
  }),
  methods: {
    next(page) {
      console.log(page);
    }
  }
};
</script>
