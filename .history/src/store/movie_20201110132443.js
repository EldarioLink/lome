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
      state.movieData = [];
    }
  },
  actions: {
    async fetchMovieById({ getters, commit, dispatch }, movieData) {
      try {
        const uid = await dispatch("getUid");
        const movieFullData = [];
        ///
        var likeChange = firebase.database().ref("users/" + uid + "/info");

        likeChange.on("value", function(snapshot) {
          commit("clearMovie");
          console.log("fulldata", movieFullData);
          console.log();
          movieFullData.map(movie => {
            for (let key in snapshot.val()) {
              if (movie.id === key.like) {
                movie.id = key.like;
              }
            }
          });
          commit("clearMovie");
          console.log("getmovies", getters.getMovie);
          commit("setMovie", movieFullData);
          console.log("fullmovies", getters.getMovie);
        });
        ////
        console.log("out", movieData);

        await Promise.all(
          movieData.map(async movie => {
            // Находим фильм по id и его значение пушим в массив

            let id =
              (
                await firebase
                  .database()
                  .ref(`users/${uid}/info`)
                  .child(movie.id)
                  .once("value")
              ).val() || {};
            let existLike = id.like !== true ? false : true;
            movie["like"] = existLike;
            console.log("progress");

            movieFullData.push(movie);
          })
        );
        console.log("end");

        return movieFullData;
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
          console.log("1");
          dispatch("fetchMovieById", response.data.titles).then(movieData => {
            console.log("1-2");

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
    async updateFavoriteMovie(
      { getters, dispatch, commit },
      { like, movieId }
    ) {
      try {
        const uid = await dispatch("getUid");
        console.log(like, movieId);
        await firebase
          .database()
          .ref(`users/${uid}/info`)
          .child(movieId)
          .update({ like });
        const moviesLikeChange = this.getters.getMovie;

        moviesLikeChange.map(oneMovie => {
          if (oneMovie.id === this.moveId) {
            oneMovie.like = like;
          }
        });
        commit("clearMovie");
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
