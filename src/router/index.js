import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "Tasks",
        component: () => import("../views/Tasks/Index.vue"),
      },
      {
        path: "tasks/create",
        name: "CreateTask",
        component: () => import("../views/Tasks/Create.vue"),
      },
      {
        path: "tasks/:id/edit",
        name: "EditTask",
        component: () => import("../views/Tasks/Edit.vue"),
      },
      {
        path: "tasks/:id/",
        name: "ShowTask",
        component: () => import("../views/Tasks/Show.vue"),
      },
    ],
  },
  {
    path: "/auth/",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "register",
        name: "Register",
        component: () => import("../views/Register.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    name: "Not Found",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
