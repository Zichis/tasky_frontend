import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  user: {},
  tasks: [],
  statuses: [],
  priorities: [],
  myOrganizations: [],
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
    statuses(state, statuses) {
      state.statuses = statuses;
    },
    priorities(state, priorities) {
      state.priorities = priorities;
    },
    myOrganizations(state, myOrganizations) {
      state.myOrganizations = myOrganizations;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    tasks(context, tasks) {
      context.commit("tasks", tasks);
    },
    statuses(context, statuses) {
      context.commit("statuses", statuses);
    },
    priorities(context, priorities) {
      context.commit("priorities", priorities);
    },
    myOrganizations(context, myOrganizations) {
      context.commit("myOrganizations", myOrganizations);
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
    statuses: (state) => {
      return state.statuses;
    },
    priorities: (state) => {
      return state.priorities;
    },
    myOrganizations: (state) => {
      return state.myOrganizations;
    },
  },
});
