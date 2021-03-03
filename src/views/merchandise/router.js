import { layOut } from "@/router/config";
export default [
  {
    path: "/merchandise",
    component: layOut,
    name: "merchandise",
    meta: {
      aside: true,
      title: "商品维护",
      cache: false,
      auth: ""
    },
    children: [
      {
        path: "params",
        component: () => import("@/views/merchandise/pages/params"),
        name: "params",
        meta: {
          aside: true,
          title: "参数设置",
          cache: false,
          auth: ""
        }
      },
      {
        path: "goods",
        component: () => import("@/views/merchandise/pages/goods"),
        name: "goods",
        meta: {
          aside: true,
          title: "菜品管理",
          cache: false,
          auth: ""
        }
      }
    ]
  }
];
