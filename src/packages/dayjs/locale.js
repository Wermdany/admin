import dayjs from "dayjs";

import zh_CN from "dayjs/locale/zh-cn";
import en_US from "dayjs/locale/en";
import ko_KR from "dayjs/locale/ko";
import ja_JP from "dayjs/locale/ja";

import { availableLocales } from "@/locales/config";

/** dayjs 系统支持的 语言 */
export const dayjsLocales = {
  zh_CN,
  en_US,
  ko_KR,
  ja_JP
};

/**
 *设置 dayjs 的国际化语言
 *
 * @param {string} lang
 */
export function setDayjsLocale(lang) {
  if (availableLocales.includes(lang)) {
    dayjs.locale(dayjsLocales[lang]);
  } else {
    console.error(
      `设置 dayjs 国际化配置失败，缺少[${lang}]配置文件，目前仅支持${availableLocales}`
    );
  }
}
