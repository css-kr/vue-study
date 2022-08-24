import axios from "axios";

const state = {
  items: [],
}; //초기값,데이터
const getters = {
  getTags(state) {
    return state.items;
  },
}; //내용가져옴
const actions = {
  async getTags({ commit }) {
    const { data } = await axios.get(
      "https://theme.sunflower.kr/wp-json/wp/v2/tags"
    );
    console.log("-----", data);
    commit("UPDATE_TAGS", data);
  },
}; //함수
const mutations = {
  UPDATE_TAGS(state, payload) {
    state.items = payload;
  },
}; //변경 탐지

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
