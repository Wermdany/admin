export default [
  {
    path: "/login",
    component: () => import("@/views/login/pages/login"),
    name: "LOGIN",
    meta: {
      aside: false,
      alwaysShow: false,
      cache: false,
      affix: false
    }
  }
];
