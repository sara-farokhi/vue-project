<template>
  <div class="col-md-3 mb-4">
    <div class="card h-100" style="width: 18rem">
      <div class="card-header">
        <router-link :to="{ name: 'editPost', params: { id: post.id } }">
          <i
            class="bi bi-pencil-square text-secondary mx-2 h5"
            :style="{ cursor: 'pointer' }"
          ></i>
        </router-link>
        <i
          :style="{ cursor: 'pointer' }"
          class="bi bi-x-square-fill text-danger h5"
          @click="deletePost($event)"
        ></i>
      </div>
      <div class="container">
        <p class="h5 py-2">{{ post.title }}</p>
        <hr />
        <p>{{ post.body }} ...</p>
        <router-link :to="{ name: 'post', params: { id: post.id } }"
          ><p>Read More</p></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toRefs } from "vue";

export default {
  props: {
    post: Object,
  },
  setup(props) {
    const { post } = toRefs(props);
    const id = post.value.id;
    const deletePost = async (e) => {
      // console.log(e.target.parentElement.parentElement);

      await axios.delete(`http://localhost:3004/posts/${id}`);
      e.target.parentElement.parentElement.parentElement.style.display = "none";
      e.target.parentElement.parentElement.parentElement.style.visibilty =
        "hidden";
    };
    return { deletePost };
  },
};
</script>

<style></style>
