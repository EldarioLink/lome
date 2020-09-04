import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";

Vue.use(VueRouter);

import Login from "@/layouts/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("@/views/App.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("@/views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
