<template>
  <div>
    <div class="container">
      <button class="bg-dark text-white my-3 rounded">
        <router-link :to="{ name: 'createPost' }">Create Post</router-link>
      </button>

      <LoaderComp v-if="loading" />
      <div v-else class="row">
        <PostView
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @updatePosts="updatePostLis(evt)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostView from "../posts/PostView.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";
import LoaderComp from "../ui/LoaderComp.vue";

export default {
  components: {
    LoaderComp,
    PostView,
  },
  setup() {
    const store = useStore();
    const loading = ref(true);
    const posts = computed(() => store.getters["postsModule/setPosts"]);
    async function getPosts() {
      loading.value = true;
      await store.dispatch("postsModule/fetchPosts");
      loading.value = false;
    }

    getPosts();

    return { loading, store, posts };
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
