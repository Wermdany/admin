/**
 *加载所有的路由配置文件
 *
 *只会加载 views/xxx/router.js
 */
export function getAllRouterConfig() {
  // 加载模块语言资源
  const requireModule = require.context(
    "@/views",
    true,
    /\.\/[\w]+\/router\.js$/
  );

  const modules = requireModule.keys().reduce((module, path) => {
    const name = path.replace(/\.\/([\w]+)\/router\.js$/, "$1");
    // 排除 login
    if (name === "login") {
      return module;
    }
    const value = requireModule(path);

    return module.concat(value.default);
  }, []);

  return modules;
}
