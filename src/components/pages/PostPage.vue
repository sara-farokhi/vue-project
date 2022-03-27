<template>
  <div>
    <div class="container">
      <p class="my-5 h6">post page</p>
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="row">
        <PostView v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import PostView from "../posts/PostView.vue";
import axios from "axios";
import { ref } from "vue";
export default {
  components: {
    PostView,
  },
  setup() {
    const posts = ref([]);
    const loading = ref(true);
    const getPosts = async () => {
      const { data } = await axios.get(`http://localhost:3004/posts`);
      console.log(data);
      posts.value = data;
      loading.value = false;
    };
    getPosts();
    return { posts, loading };
  },
};
</script>

<style></style>
