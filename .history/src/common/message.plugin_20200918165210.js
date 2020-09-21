export default {
 // install(Vue) {
    Vue.prototype.$message = function(html) {
      // eslint-disable-next-line no-undef
      this.$toast(html, {});
    };
    Vue.prototype.$error = function(html) {
      // eslint-disable-next-line no-undef
      this.$toast(`[Error]: ${html}`, {});
    };
 // }
};
