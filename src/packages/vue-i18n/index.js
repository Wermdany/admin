import Vue from "vue";
import i18n from "vue-i18n";
import { getAllLangs } from "@/locales/lang";
import { isDev } from "@/utils/env";

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
