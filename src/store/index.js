import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  user: null,
  tasks: [],
  categories: [],
};

export default new Vuex.Store({
  state,
  mutations: {
    user(state, user) {
      state.user = user;
    },
    tasks(state, tasks) {
      state.tasks = tasks;
    },
    categories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    tasks(context, tasks) {
      context.commit("tasks", tasks);
    },
    categories(context, categories) {
      context.commit("categories", categories);
    },
  },
  modules: {},
  getters: {
    user: (state) => {
      return state.user;
    },
    tasks: (state) => {
      return state.tasks;
    },
    categories: (state) => {
      return state.categories;
    },
  },
});
