import axios from "axios";
import Swal from "sweetalert2";

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

    //  delete single post

    async deleteSinglePost({ commit }, id) {
      const res = await axios.delete(`http://localhost:3004/posts/${id}`);
      commit("updateAfterDelete", res.data);
    },

    // create post

    async createSinglePost(context, newPostData) {
      await axios.post(`http://localhost:3004/posts`, newPostData);
      Swal.fire({
        title: "Thanks!",
        text: "submission is done",
        icon: "success",
        confirmButtonText: "Cool",
      });
    },

    // edit post

    async editSinglePost(context, { newPostData, id }) {
      console.log(id);
      console.log(newPostData);
      await axios.put(`http://localhost:3004/posts/${id}`, newPostData);
      Swal.fire({
        title: "Thanks!",
        text: "submission is done",
        icon: "success",
        confirmButtonText: "Cool",
      });
    },
  },
};
export default postsModule;
