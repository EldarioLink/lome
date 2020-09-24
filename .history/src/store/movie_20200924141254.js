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
  actions: {
    getMovie({ dispatch, commit }, { email, password, name }) {
      console.log(movie);
      this.axios
        .get(
          `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movie}`,
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
          this.data = response;
          console.log(this.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  getters: {
    info: s => s.info
  }
};
