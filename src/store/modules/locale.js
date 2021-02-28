import { antLocales } from "@/packages/ant-design-vue/locale";
import { availableLocales } from "@/locales/config";

const state = {
  /** 当前使用的语言 */
  lang: "",
  /** ant-design-vue 国际化配置文件 */
  antLocale: {}
};

const mutations = {
  /** 设置系统语言 */
  SET_LANG: (state, lang) => {
    state.lang = lang;
  },
  /** 设置 ant-design-vue 国际化 */
  SET_ANT_LOCALE: (state, payload) => {
    state.antLocale = payload;
  }
};

const actions = {
  /** 设置系统语言 */
  setLang: ({ commit }, payload) => {
    commit("SET_LANG", payload);
  },
  /** 设置 ant-design-vue 国际化 */
  setAntLocale: ({ commit }, lang) => {
    if (availableLocales.includes(lang)) {
      commit("SET_ANT_LOCALE", antLocales[lang]);
    } else {
      console.error(
        `设置 ant-design-vue 国际化配置失败，缺少[${lang}]配置文件，目前仅支持${availableLocales}`
      );
    }
  },
  /** 设置语言 */
  setLocale: ({ dispatch }, lang) => {
    dispatch("setLang", lang);
    dispatch("setAntLocale", lang);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
