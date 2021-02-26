/** 本地语言，同时也是默认语言，在所有回退规则失效后，才会选择 */
export const locale = "zh_CN";
/** 当某种语言翻译不存在时，回退的翻译语言 */
export const fallbackLocale = "zh_CN";
/** 当前系统支持的语言 */
export const availableLocales = ["zh_CN", "en_US", "ko_KR", "ja_JP"];

export const langKeys = {
  zh_CN: "zh_CN",
  en_US: "en_US",
  ko_KR: "ko_KR",
  ja_JP: "ja_JP"
};
/** url中标志语言的 key */
export const urlQueryKey = "language";
/** 首选语言回退映射 */
export const fallbackLanguagesMap = {
  zh: "zh_CN",
  en: "en_US",
  ja: "ja_JP",
  jp: "ja_JP",
  ko: "ko_KR"
};
