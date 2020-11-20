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
      state.allMovies = data;
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

        Promise.all(
          for(var key in allMovies) {
            if (allMovies[key].like === true) {
              Vue.axios
                .get(
                  `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${key}`,
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
                  let obj = Object.assign({}, response.data);
                  obj.like = true;
                  likedMovies.push(obj);
                  console.log(likedMovies);
                  console.log("lolo");
                });
            }
          }
        );
        
        console.log(likedMovies);

        console.log("likedMovies:", likedMovies);
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
