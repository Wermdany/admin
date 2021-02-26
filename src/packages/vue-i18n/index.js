import Vue from "vue";
import i18n from "vue-i18n";
import { getAllLangs } from "@/locales/lang";
import { isDev } from "@/utils/env";
import { availableLocales } from "@/locales/config";

Vue.use(i18n);
const messages = getAllLangs();

const vueI18n = new i18n({
  locale: "",
  messages,
  silentFallbackWarn: isDev()
});

export default vueI18n;

/**
 * 获取当前的语言
 *
 * @return {string} 当前的语言
 */
export function getLanguage() {
  return vueI18n.locale;
}

/**
 * 设置 vue-i18n 国际化
 * @param {*} lang
 */
export function setVueI18nLocale(lang) {
  if (availableLocales.includes(lang)) {
    vueI18n.locale = lang;
  } else {
    console.error(
      `设置 vue-i18n 国际化配置失败，缺少[${lang}]配置文件，目前仅支持${availableLocales}`
    );
  }
}
