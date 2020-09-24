/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";

export default {
  state: {
    movieData: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    }
  },
  actions: {},
  getters: {
    info: s => s.info
  }
};
