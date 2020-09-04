import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main", auth: true },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main", auth: true },
    component: () => import("@/views/Categories.vue")
  },
  {
    path: "/detail/:id",
    name: "detail",
    meta: { layout: "main", auth: true },
    component: () => import("@/views/DetailRecord.vue")
  },
  {
    path: "/history",
    name: "history",
    meta: { layout: "main", auth: true },
    component: () => import("@/views/History.vue")
  },
  {
    path: "/planning",
    name: "planning",
    meta: { layout: "main", auth: true },
    component: () => import("@/views/Planning.vue")
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main", auth: true },
    component: () => import("@/views/Profile.vue")
  },
  {
    path: "/record",
    name: "record",
    meta: { layout: "main", auth: true },
    component: () => import("@/views/Record.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("@/views/Register.vue")
  }
];
