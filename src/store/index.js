import Vue from "vue";
import Vuex from "vuex";
import tags from "./tags/index";
import comments from "./comments/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tags,
    comments,
  },
});
