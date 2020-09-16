export default {
  install(Vue) {
    Vue.prototype.$message = function(html) {
      // eslint-disable-next-line no-undef
      this.$toast({ html }), {});
      M.toast({ html });
    };
    Vue.prototype.$error = function(html) {
      // eslint-disable-next-line no-undef
      M.toast({ html: `[${localize("Error")}]:${html}` });
    };
  }
};
