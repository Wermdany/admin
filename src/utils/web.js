/** 设置 HTML lang */
export function setHTMLLang(lang) {
  document.documentElement.lang = lang;
}

/** 获取浏览器语言列表  */
export function getSystemLanguages() {
  return navigator.languages;
}

/** 获取浏览器当前语言  */
export function getSystemLanguage() {
  return navigator.language;
}
