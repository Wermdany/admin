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
    if (!state.openedViews.find(item => item.path == payload.path)) {
      state.openedViews.push(payload);
    }
  },
  DELETE_OPENED_VIEWS: (state, payload) => {
    state.openedViews.splice(payload.i, 1);
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
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
