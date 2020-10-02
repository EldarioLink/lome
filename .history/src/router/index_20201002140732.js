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
    path: "/myfilms",
    name: "myfilms",
    meta: { layout: "main" },
    component: () => import("@/views/Myfilms.vue")
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main" },
    component: () => import("@/views/Profile.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("@/views/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);
  if (requireAuth && !currentUser) {
    next("/login?message=login");
  } else {
    next();
  }
});

export default router;
