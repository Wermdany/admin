const state = {
  routes: []
};
const mutations = {
  SET_ROUTERS: (state, payload) => {
    state.routes = payload;
  }
};
const actions = {
  setRoutes({ commit }, payload) {
    commit("SET_ROUTERS", payload);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
