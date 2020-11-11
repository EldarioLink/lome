/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import Vue from "vue";

export default {
  state: {},
  mutations: {
    likedMovies(state, data) {
      state.likedMovies = data;
    }
  },
  actions: {
    async showLikedMovies({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        let likedMovies =
          (
            await firebase
              .database()
              .ref(`users/${uid}/info`)
              .once("value")
          ).val() || {};
        console.log("whats:", likedMovies);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },
  getters: {
    getlikedMovies: s => s.likedMovies
  }
};
