import { isDev } from "@/utils/env";
import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/layouts/page/404.vue")
  }
];

const createRouter = () =>
  new Router({
    mode: "hash",
    scrollBehavior: () => ({ y: 0 }),
    routes: []
  });
const router = createRouter();

/**
 *重置路由表
 *
 *
 * Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
 */
export function resetRouter() {
  const newRouter = new createRouter();
  router.matcher = newRouter.matcher; // reset router
  // 在测试环境 适配 vue-devtools 查看全部路由信息
  if (isDev()) {
    router.options.routes = [];
  }
}
/**
 * 新增路由表信息
 *
 * @param {*} routes
 */
export function addRoutes(routes) {
  router.addRoutes(routes);
  // 在测试环境 适配 vue-devtools 查看全部路由信息
  if (isDev()) {
    router.options.routes = routes;
  }
}

addRoutes(routes);

export default router;
