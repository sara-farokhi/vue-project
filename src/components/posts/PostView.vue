<template>
  <div class="col-md-3 my-2">
    <div class="card vh-50" style="width: 18rem">
      <div class="card-header d-flex justify-content-between">
        <router-link :to="{ name: 'post', params: { id: post.id } }"
          >Post Info</router-link
        >
        <i
          :style="{ cursor: 'pointer' }"
          class="bi bi-x-square-fill text-danger"
          @click="deletePost($event)"
        ></i>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ post.title }}</li>
        <li class="list-group-item">{{ post.body }}</li>
      </ul>
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
