import { layOut } from "@/router/config";
export default [
  {
    path: "/merchandise",
    component: layOut,
    name: "MERCHANDISE",
    meta: {
      aside: true,
      alwaysShow: true,
      title: "菜品管理",
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
          alwaysShow: true,
          title: "参数管理",
          cache: false,
          auth: ""
        }
        // children: [
        //   {
        //     path: "goods",
        //     component: () => import("@/views/merchandise/pages/goods"),
        //     name: "GOODS",
        //     meta: {
        //       aside: true,
        //       alwaysShow: true,
        //       title: "菜管理",
        //       cache: false,
        //       auth: ""
        //     }
        //   }
        // ]
      },
      {
        path: "goods",
        component: () => import("@/views/merchandise/pages/goods"),
        name: "GOODS",
        meta: {
          aside: true,
          alwaysShow: true,
          title: "菜管理",
          cache: false,
          auth: ""
        }
      }
    ]
  }
];
