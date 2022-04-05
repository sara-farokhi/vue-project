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
</template>

<script>
import {
  // useRoute,
  useRouter,
} from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const postInfo = computed(() => store.getters["postsModule/setSinglePost"]);

    const goBack = () => {
      router.push({ name: "posts" });
    };

    return {
      postInfo,
      goBack,
    };
  },
};
</script>

<style></style>
