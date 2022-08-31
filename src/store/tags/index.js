import axios from "axios";

const state = {
  items: [],
}; //초기값 등록
const getters = {
  getTags(state) {
    return state.items;
  },
}; // 스테이트 뽑아다씀
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
    state.items = payload;
    // console.log("!!!!!!", state.items, payload);
  },
}; // 스테이트 변경값 감지해주

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
