import { availableLocales } from "@/locales/config";
import { merge } from "lodash-es";

/**
 *生成语言模板
 *
 * @export
 * @return {*}
 */
export function genLangs() {
  const langs = {};
  availableLocales.forEach(item => {
    langs[item] = {};
  });
  return langs;
}

export function loadCommonLang() {
  // 加载模块语言资源
  const requireModule = require.context(
    "./common",
    true,
    /\.\/[a-z]{2,3}_[A-Z]{2}\.js$/
  );

  const modules = requireModule.keys().reduce((module, path) => {
    // ./common/ko_KR.js => ko_KR

    const name = path.replace(/\.\/([a-z]{2,3}_[A-Z]{2})\.js$/, "$1");
    if (name in module) {
      const moduleLang = Object.create({});
      // 如果文件是空的则，下面这句取不出来结果
      const value = requireModule(path);
      moduleLang.common = value.default;
      module[name] = moduleLang;
    } else {
      throw new Error(`不合法的语言文件:[${path}]`);
    }

    return module;
  }, genLangs());

  return modules;
}

/**
 * 加载其他模块语言
 *
 * @export
 */
export function loadOtherLang() {
  // 加载模块语言资源
  const requireModule = require.context(
    "@/views",
    true,
    /\.\/[\w]+\/lang\/[a-z]{2,3}_[A-Z]{2}\.js$/
  );

  const modules = requireModule.keys().reduce((module, path) => {
    // ./login/lang/ko_KR.js => login ko_KR
    const name = path.replace(
      /\.\/([\w]+)\/lang\/([a-z]{2,3}_[A-Z]{2})\.js$/,
      "$1 $2"
    );

    const [moduleName, lang] = name.split(" ");

    if (lang in module) {
      const moduleLang = Object.create({});
      // 如果文件是空的则，下面这句取不出来结果
      const value = requireModule(path);
      moduleLang[moduleName] = value.default;
      module[lang] = { ...module[lang], ...moduleLang };
    } else {
      throw new Error(`不合法的语言文件:[${path}]`);
    }

    return module;
  }, genLangs());

  return modules;
}

export function getAllLangs() {
  const other = loadOtherLang();
  const common = loadCommonLang();
  return merge(common, other);
}
