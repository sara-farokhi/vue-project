import axios from "axios";

const postsModule = {
  namespaced: true,
  state: {
    posts: [],
  },
  getters: {
    setPosts(state) {
      return state.posts;
    },
  },
  mutations: {
    getPosts(state, posts) {
      return (state.posts = posts);
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const res = await axios.get(`http://localhost:3004/posts`);
      const data = res.data;
      // console.log(data);
      commit("getPosts", data);
    },
  },
};
export default postsModule;
