import axios from "axios";

const state = {
  items: [],
};
const getters = {
  getTags(state) {
    return state.items;
  },
};
const mutations = {
  UPDATE_TAGS(state, payload) {
    state.item = payload;
  },
};
const actions = {
  async getTags({ commit }) {
    const { data } = await axios.get(
      `${process.env.VUE_APP_URL}/wp-json/wp/v2/tags`
    );
    commit("UPDATE_TAGS", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
