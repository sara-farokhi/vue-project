<template>
  <div class="container">
    <div class="card my-5 p-5">
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else>
        <p class="h2 mb-5">{{ postinfo.title }}</p>
        <p class="h6">{{ postinfo.body }}</p>
      </div>
    </div>
    <button class="btn btn-dark" @click="goBack">Back to posts</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const postinfo = ref({});
    const loading = ref(true);
    const getPostInfo = async () => {
      const { data } = await axios.get(
        `http://localhost:3004/posts/${route.params.id}`
      );
      postinfo.value = data;
      loading.value = false;
    };
    getPostInfo();
    const goBack = () => {
      router.push({ name: "posts" });
    };
    return {
      postinfo,
      goBack,
      loading,
    };
  },
};
</script>

<style></style>
