import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  user: {},
  tasks: [],
  categories: [],
  statuses: [],
  priorities: [],
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
    statuses(state, statuses) {
      state.statuses = statuses;
    },
    priorities(state, priorities) {
      state.priorities = priorities;
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
    statuses(context, statuses) {
      context.commit("statuses", statuses);
    },
    priorities(context, priorities) {
      context.commit("priorities", priorities);
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
    statuses: (state) => {
      return state.statuses;
    },
    priorities: (state) => {
      return state.priorities;
    },
  },
});
