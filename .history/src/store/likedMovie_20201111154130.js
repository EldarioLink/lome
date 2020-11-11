/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import Vue from "vue";

export default {
    state: { 
    },
    mutations: {
        likedMovies(state, data) {
          state.loading = data;
        }
    },
    actions:{

    },
    getters:{
        
    }