/** 登陆后的重定向地址 */
export const loginRedirectPath = "";

/** 未登录默认重定向页面 */
export const unLoginRedirectConfig = [
  {
    path: "/",
    redirect: "/login"
  }
];

/** 登录默认重定向页面 */
export const loginRedirectConfig = [
  {
    path: "/",
    redirect: loginRedirectPath
  }
];

/** 登陆后 404 后备页面匹配配置 */
export const login404RouterConfig = [
  { path: "*", name: "404", component: () => import("@/layouts/page/404.vue") }
];

/** 未登陆 404 后备页面匹配配置 */
export const unLogin404RouterConfig = [{ path: "*", redirect: "/login" }];

export const layOut = () => import("@/layouts");
