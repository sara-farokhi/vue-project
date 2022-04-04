import axios from "axios";

const users = {
  namespaced: true,

  state: {
    users: [],
    count: 1,
  },

  getters: {
    setUsers(state) {
      return state.users;
    },
  },

  mutations: {
    getUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const res = await axios.get(`http://localhost:3004/users`);
      const data = res.data;
      commit("getUsers", data);
    },
  },
};
export default users;
