<template>
  <div class="col-md-2 col-lg-3 g-3">
    <div class="card" style="width: 18rem">
      <div class="card-header">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          User Info
        </router-link>
        <i
          :style="{ cursor: 'pointer' }"
          class="bi bi-x-square-fill text-danger"
          @click="deletePost"
        ></i>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: {{ user.name }}</li>
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Phone: {{ user.phone }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style></style>
