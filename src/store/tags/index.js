import axios from "axios";

const state = {
  items: [],
};
const getters = {};
const actions = {
  async getTags({ commit }) {
    const { data } = await axios.get(
      "https://theme.sunflower.kr/wp-json/wp/v2/tags"
    );
    console.log("===", data);
    commit("UPDATE_TAGS", data);
  },
};
const mutations = {
  UPDATE_TAGS(state, payload) {
    state.items = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
