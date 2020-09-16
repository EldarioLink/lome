export default {
  install(Vue, options) {
    Vue.prototype.$message = function(text) {};
  }
};
