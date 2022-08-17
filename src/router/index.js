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
    path: "/blog",
    name: "blog",
    component: () => import("../views/blog/Index.vue"),
    children: [
      {
        path: "list",
        name: "blogList",
        component: () => import("@/views/blog/List"),
      },
      {
        path: "detail/:id(\\d+)",
        name: "blogDetail",
        component: () => import("@/views/blog/Detail"),
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
