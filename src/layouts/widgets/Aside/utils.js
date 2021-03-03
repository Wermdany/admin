/**
 * 路径转打开数组
 * /a/b     => ["/a"]
 * /a/b/c   => ["/a","/a/b"]
 * /a/b/c/d => ["/a","/a/b","/a/b/c"]
 * @export
 * @param {*} path
 */
export function pathToOpenKeys(path) {
  if (!path || path.charAt(0) !== "/") {
    return [];
  }
  var routerArr = [];
  for (var i = 1; i < path.length; i++) {
    var indexStart = 0;
    if (path.charAt(i) == "/") {
      routerArr.push(path.slice(indexStart, i));
    }
  }
  return routerArr;
}
/**
 *过滤路由信息成 menu 需要的样子
 *
 * @export
 * @param {*} routes
 */
export function filterRoutesToMenu(routes) {
  return routes;
}
