/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("loginStore");
        // eslint-disable-next-line no-empty
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log("RegistrStore");

        // eslint-disable-next-line no-empty
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      await commit("clearInfo");
    }
  }
};
