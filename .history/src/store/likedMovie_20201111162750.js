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
          console.log(likedMovies[key].like);
          if (likedMovies[key].like === true) {
            console.log("workisgetters", rootGetters.likedMovies);
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
    getlikedMovies(state, getters, rootState, rootGetters) {
      rootGetters.likedMovies; //'someOtherGetter' global getter
      rootGetters["movie/likedMovies"]; //'bar/someOtherGetter' namespaced getter
    }
  }
};
