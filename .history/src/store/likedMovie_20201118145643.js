/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import Vue from "vue";

export default {
  state: {},
  mutations: {
    allMovies(state, data) {
      state.allMovies = data;
    }
  },
  actions: {
    async showallMovies({ getters, dispatch, commit }) {
      const likedMovies = [];
      try {
        const uid = await dispatch("getUid");
        let allMovies =
          (
            await firebase
              .database()
              .ref(`users/${uid}/info`)
              .once("value")
          ).val() || {};

        console.log(allMovies);

        for (var key in allMovies) {
          if (allMovies[key].like === true) {
            likedMovies.push((allMovies[key].like = true));
          }
        }

        console.log("whats:", allMovies);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },
  getters: {
    getallMovies(state, getters, rootState, rootGetters) {
      rootGetters.allMovies; //'someOtherGetter' global getter
      rootGetters["movie/allMovies"]; //'bar/someOtherGetter' namespaced getter
    }
  }
};
