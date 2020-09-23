<template>
  <div class="text-center">
    <v-pagination color="yellow" v-model="page" :length="6"></v-pagination>
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
