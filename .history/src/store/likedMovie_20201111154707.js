/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import Vue from "vue";

export default {
  state: {},
  mutations: {
    likedMovies(state, data) {
      state.loading = data;
    }
  },
  actions: {
    async showLikedMovies({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`users/${uid}/info`)
          .child(movieId)
          .update({ like });
        const moviesLikeChange = this.getters.getMovie;

        moviesLikeChange.map(oneMovie => {
          if (oneMovie.id === movieId) {
            oneMovie.like = like;
          }
        });

        commit("clearMovie");
        commit("setMovie", moviesLikeChange);
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
