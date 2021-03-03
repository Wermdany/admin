import { layOut } from "@/router/config";
export default [
  {
    path: "/merchandise",
    component: layOut,
    name: "MERCHANDISE",
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
        name: "PARAMS",
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
        name: "GOODS",
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
