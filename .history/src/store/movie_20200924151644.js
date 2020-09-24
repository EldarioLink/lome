/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import axios from "axios";
import VueAxios from "vue-axios";

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
  actions: {
    getMovie({ dispatch, commit }, { movieName }) {
      console.log(this.axios);
      Vue.axios.get
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
          this.movieData = response;
          return this.movieData;
        })
        .catch(err => {
          console.log(err);
          commit("setError", err);
          throw err;
        });
    }
  },
  getters: {
    info: s => s.info
  }
};
