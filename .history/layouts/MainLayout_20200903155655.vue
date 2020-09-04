<template>
  <div>
    <Loader v-if="loading" />
    <div v-else>
      CONTENT
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  async mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>
