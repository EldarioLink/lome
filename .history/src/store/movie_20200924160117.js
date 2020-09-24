/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import Vue from "vue";

export default {
  state: {
    movieData: {},
    loading: false
  },
  mutations: {
    setMovie(state, info) {
      state.movieData = info;
    },
    clearMovie(state) {
      state.movieData = {};
    }
  },
  actions: {
    getMovie({ dispatch, commit }, movieName) {
      console.log(movieName);
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
          store.commit("setMovie", response);
          return response;
        })
        .catch(err => {
          console.log(err);
          commit("setError", err);
          throw err;
        });
    }
  },
  getters: {
    getMovie: s => s.movieData
  }
};
