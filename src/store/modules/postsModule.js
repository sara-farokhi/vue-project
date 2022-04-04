import axios from "axios";

const postsModule = {
  namespaced: true,
  state: {
    posts: [],
    singlePost: {},
  },
  getters: {
    setPosts(state) {
      return state.posts;
    },

    setSinglePost(state) {
      return state.singlePost;
    },
  },
  mutations: {
    getPosts(state, posts) {
      return (state.posts = posts);
    },

    getSingle(state, post) {
      return (state.singlePost = post);
    },
  },
  actions: {
    // get post list

    async fetchPosts({ commit }) {
      const res = await axios.get(`http://localhost:3004/posts`);
      const data = res.data;
      commit("getPosts", data);
    },
    // view each post

    async fetchSinglePost({ commit }, id) {
      const res = await axios.get(`http://localhost:3004/posts/${id}`);
      commit("getSingle", res.data);
    },
  },
};
export default postsModule;
