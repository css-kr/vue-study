const state = {
  parent: 0,
};
const getters = {
  getParent: ({ parent }) => parent,
};
const actions = {
  setParent({ commit }, payload) {
    console.log("comment store", payload);
    commit("SET_PARENT", payload);
  },
};
const mutations = {
  SET_PARENT: (state, payload) => (state.parent = payload),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations, //변경감지
};
