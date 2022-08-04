import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/user", //? 있을수도 없을수도 있다
    name: "user",
    component: () => import("@/views/user/UserIndex.vue"),
    children: [
      {
        path: "list/:page?", //? 없어도 된다
        name: "userList",
        component: () => import("@/views/user/UserList.vue"),
      },
      {
        path: "detail/:id",
        name: "userDetail",
        component: () => import("@/views/user/UserDetail.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
