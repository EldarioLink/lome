<template>
  <div class="text-center">
    <v-pagination color="primary" v-model="page" :length="66"></v-pagination>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1
  }),
  methods: {}
};
</script>
