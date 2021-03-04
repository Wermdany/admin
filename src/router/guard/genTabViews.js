import store from "@/store";

function filterRouteToParams(to) {
  return {
    path: to.path,
    fullPath: to.fullPath,
    title: to.meta.title,
    name: to.name,
    query: to.query,
    params: to.params,
    cache: to.meta.cache
  };
}

export function genTabViews(router) {
  router.beforeEach((to, from, next) => {
    const ob = filterRouteToParams(to);
    store.dispatch("tabView/addPage", ob);
    next();
  });
}
