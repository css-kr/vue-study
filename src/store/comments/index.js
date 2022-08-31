const state = {
  parent: 0,
}; //초기값 등록

const getters = {
  getParent: (state) => state.parent,
}; //

const actions = {
  setParent({ commit }, payload) {
    console.log("comment store", payload);
    commit("SET_PARENT", payload);
  },
}; //함수 만듬

const mutations = {
  SET_PARENT: (state, payload) => (state.parent = payload),
}; //

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
