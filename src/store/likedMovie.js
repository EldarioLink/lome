/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import Vue from "vue";

export default {
  state: {
    likedMovies: null
  },
  mutations: {
    likedMovies(state, data) {
      state.likedMovies = data;
    },
    clearLikedMovies(state) {
      state.likedMovies = [];
    }
  },
  actions: {
    async SHOW_LIKED_MOVIES({
      getters,
      dispatch,
      commit,
      rootState,
      rootGetters
    }) {
      commit("setLoading", true);
      let localLikedFilms = [];
      try {
        const uid = await dispatch("getUid");
        let allMovies =
          (
            await firebase
              .database()
              .ref(`users/${uid}/info`)
              .once("value")
          ).val() || {};
        for (var key in allMovies) {
          if (allMovies[key].like === true) {
            localLikedFilms.push(allMovies[key]);
          }
        }
        localLikedFilms = localLikedFilms.length > 0 ? localLikedFilms : null;
        commit("likedMovies", localLikedFilms);
        commit("setLoading", false);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async LIKE_MOVIE_FROM_COMP({ dispatch, commit }, { like, movieId }) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`users/${uid}/info`)
          .child(movieId)
          .update({ like });
        const likedFilms = this.getters.getLikedMovie;
        likedFilms.map(oneMovie => {
          if (oneMovie.likedId === movieId) {
            oneMovie.like = like;
          }
        });
        commit("clearLikedMovies")
        commit("likedMovies", likedFilms);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },
  getters: {
    getLikedMovie: s => s.likedMovies
  }
};
