<template>
  <div class="container">
    <div class="card my-5 p-5">
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else>
        <p class="h2 mb-5">{{ postInfo.title }}</p>
        <p class="h6">{{ postInfo.body }}</p>
      </div>
    </div>
    <button class="btn btn-dark" @click="goBack">Back to posts</button>
  </div>

  {{ postInfo }}
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const loading = ref(true);
    const id = route.params.id;

    const postInfo = store.getters["postsModule/setSinglePost"];

    const getPostInfo = async () => {
      (loading.value = true), store.dispatch("postsModule/fetchSinglePost", id);
      loading.value = false;
    };
    getPostInfo();
    const goBack = () => {
      router.push({ name: "posts" });
    };
    return {
      postInfo,
      goBack,
      loading,
    };
  },
};
</script>

<style></style>
