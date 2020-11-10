/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import Vue from "vue";

export default {
  state: {
    movieData: null,
    loading: false
  },
  mutations: {
    setMovie(state, data) {
      state.movieData = data;
    },
    clearMovie(state) {
      state.movieData = {};
    }
  },
  actions: {
    async fetchMovieById({ commit, dispatch }, movieData) {
      try {
        const uid = await dispatch("getUid");
        console.log(movieData);
        const fullMovieData = await Promise.all(
          movieData.map(async movie => {
            let id =
              (
                await firebase
                  .database()
                  .ref(`users/${uid}/info`)
                  .child(movie.id)
                  .once("value")
              ).val() || {};
            movie["like"] = id.like;
          })
        );
        return { fullMovieData };
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    fetchMovie({ dispatch, commit }, movieName) {
      Vue.axios
        .get(
          `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movieName}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host":
                "imdb-internet-movie-database-unofficial.p.rapidapi.com",
              "x-rapidapi-key":
                "a67b43680emshc2b8ff4a8bf27ebp149f8ejsn7963f988d678"
            }
          }
        )
        .then(response => {
          console.log("1", response.data.titles);

          dispatch("fetchMovieById", response.data.titles).then(movieData => {
            this.commit("setMovie", movieData);
            console.log("2");
          });
          console.log("3");
        })
        .catch(err => {
          console.log(err);
          commit("setError", err);
          throw err;
        });
    },
    async updateFavoriteMovie({ dispatch, commit }, { like, movieId }) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`users/${uid}/info`)
          .child(movieId)
          .update({ like });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },
  getters: {
    getMovie: s => s.movieData
  }
};