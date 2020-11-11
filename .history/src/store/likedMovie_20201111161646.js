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
    async showLikedMovies({ getters, dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        let likedMovies =
          (
            await firebase
              .database()
              .ref(`users/${uid}/info`)
              .once("value")
          ).val() || {};

        for (var key in likedMovies) {
          if (key.like === true) {
            getters.get;
          }
        }

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
