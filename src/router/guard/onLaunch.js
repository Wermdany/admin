export function onLaunch(router) {
  router.beforeEach((to, from, next) => {
    if (from.matched.length === 0) {
      console.log("onLaunch");
    }
    return next();
  });
}
