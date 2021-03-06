import { isDev } from "@/utils/env";
import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import { getAllRouterConfig } from "./generator";
import { login404RouterConfig } from "@/router/config";
Vue.use(Router);

const routes = getAllRouterConfig();

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
  store.dispatch("tabView/setRoutes", routes);
  // 在测试环境 适配 vue-devtools 查看全部路由信息
  if (isDev()) {
    router.options.routes = routes;
  }
}

routes.push(login404RouterConfig);
console.log(routes);
addRoutes(routes);

export default router;
