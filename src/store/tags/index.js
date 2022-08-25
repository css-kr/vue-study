import axios from "axios";

const state = {
  item: [],
}; //초기값 등록
const getters = {
  getTags(state) {
    return state.items;
  },
}; //
const actions = {
  async getTags({ commit }) {
    const { data } = await axios.get(
      "https://theme.sunflower.kr/wp-json/wp/v2/tags"
    );
    console.log("-------", data);
    commit("UPDATE_TAGS", data);
  },
}; //함수 만듬
const mutations = {
  UPDATE_TAGS(state, payload) {
    console.log("!!!!!!", state.items, payload);
    state.items = payload;
  },
}; //

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
