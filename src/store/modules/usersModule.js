import axios from "axios";

const users = {
  namespaced: true,

  state: {
    users: [],
    singleUser: {},
  },

  getters: {
    setUsers(state) {
      return state.users;
    },
    setSingleUser(state) {
      return state.singleUser;
    },
  },

  mutations: {
    getUsers(state, users) {
      state.users = users;
    },
    getSingleUsers(state, singleUser) {
      state.singleUser = singleUser;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const res = await axios.get(`http://localhost:3004/users`);
      const data = res.data;
      commit("getUsers", data);
    },
    async fetchSingleUser({ commit }, id) {
      const res = await axios.get(`http://localhost:3004/users/${id}`);
      const data = res.data;

      commit("getSingleUsers", data);
    },
  },
};
export default users;
