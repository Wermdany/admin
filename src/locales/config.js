export default {
  /** 本地语言，同时也是默认语言，在所有回退规则失效后，才会选择 */
  locale: "zh_CN",
  fallbackLocale: "zh_CN",
  /** 当前系统支持的语言 */
  availableLocales: ["zh_CN", "en_US", "ko_KR", "ja_JP"],
  /** url中标志语言的 key */
  urlQueryKey: "language",
  /** 首选语言回退映射 */
  fallbackLanguagesMap: {
    zh: "zh_CN",
    en: "en_US",
    ja: "ja_JP",
    jp: "ja_JP",
    ko: "ko_KR"
  }
};
