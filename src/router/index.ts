import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Message from "../views/Message.vue";
import News from "../views/News.vue";

Vue.use(VueRouter); // 使用 VueRouter 插件，后续 new 的时候才会接受router

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "news",
        component: News,
      },
      {
        path: "message",
        component: Message,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
