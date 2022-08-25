import axios from "axios";

const state = {
  items: [],
};
const getters = {
  getTags(state) {
    return state.items;
  },
};
const actions = {
  async getTags({ commit, state }) {
    if (state.items > 0) {
      return;
    }

    const { data } = await axios.get(
      `${process.env.VUE_APP_URL}/wp-json/wp/v2/tags`
    );
    console.log("===", state.items);
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
