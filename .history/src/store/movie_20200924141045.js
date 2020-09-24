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
    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            bill: 10000,
            name
          });
        // eslint-disable-next-line no-empty
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },
  getters: {
    info: s => s.info
  }
};
