import { setDayjsLocale } from "@/packages/dayjs/locale";
import store from "@/store";
import { setVueI18nLocale } from "@/packages/vue-i18n";
import { setHTMLLang } from "@/utils/web";
/**
 * 设置系统的语言
 *
 * @param {string} lang
 */
export function setSystemLocale(lang) {
  //设置 dayjs 国际化
  setDayjsLocale(lang);
  //设置 ant-design-vue 配置国际化 & vuex 国际化标识
  store.dispatch("locale/setLocale", lang);
  //设置 vue-i18n 国际化配置
  setVueI18nLocale(lang);
  // 设置 HTML lang
  setHTMLLang(lang);
}
