import { loginRedirectPath } from "@/router/config";
const state = {
  // 注入的路由 用来生成侧边栏
  routes: [],
  // 缓存的页面 name
  cached: [],
  // 打开的 tab
  openedViews: []
};
const mutations = {
  SET_ROUTERS: (state, payload) => {
    state.routes = payload;
  },
  ADD_OPENED_VIEWS: (state, payload) => {
    if (
      !state.openedViews.find(item => item.path == payload.path) &&
      payload.name
    ) {
      state.openedViews.push(payload);
    }
  },
  DELETE_OPENED_VIEWS: (state, payload) => {
    if (state.openedViews.length !== 1 && payload.path !== loginRedirectPath) {
      state.openedViews.splice(payload.i, 1);
    }
  },
  ADD_CACHED: (state, payload) => {
    if (payload.name && !state.cached.includes(payload.name) && payload.cache) {
      state.cached.push(payload.name);
    }
  },
  DELETE_CACHED: (state, payload) => {
    const { item } = payload;
    const useNameLength = state.openedViews.filter(c => c.name == item.name)
      .length;
    if (useNameLength == 1) {
      const index = state.cached.indexOf(item.name);
      if (index >= 0) {
        state.cached.splice(index, 1);
      }
    }
  }
};
const actions = {
  setRoutes({ commit }, payload) {
    commit("SET_ROUTERS", payload);
  },
  addOpenedViews({ commit }, payload) {
    commit("ADD_OPENED_VIEWS", payload);
  },
  deleteOpenedViews({ commit }, payload) {
    commit("DELETE_OPENED_VIEWS", payload);
  },
  removeCached({ commit }, payload) {
    commit("DELETE_CACHED", payload);
  },
  addCached({ commit }, payload) {
    commit("ADD_CACHED", payload);
  },
  addPage({ dispatch }, payload) {
    dispatch("addCached", payload);
    dispatch("addOpenedViews", payload);
  },
  removePage({ dispatch }, payload) {
    dispatch("removeCached", payload);
    dispatch("deleteOpenedViews", payload);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
