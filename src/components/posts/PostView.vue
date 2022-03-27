<template>
  <div class="col-md-3 my-2">
    <div class="card vh-50" style="width: 18rem">
      <div class="card-header">
        <router-link :to="{ name: 'post', params: { id: post.id } }"
          >Post Info</router-link
        >
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ post.title }}</li>
        <li class="list-group-item">{{ post.body }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style></style>
