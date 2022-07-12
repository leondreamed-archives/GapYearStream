import { ViteSSG } from "vite-ssg";
import App from "./app.vue";

export const createApp = ViteSSG(App, {
  routes: [
    {
      path: "/",
      component: () => import("~/pages/home.vue"),
    },
  ],
});
