<template>
  <div>
    <div class="container">
      <h2 class="my-5 h6">users</h2>
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="row">
        <UserPage v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserPage from "../users/UserPage.vue";

export default {
  components: {
    UserPage,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);

    const getUsers = async () => {
      const res = await axios.get(`http://localhost:3004/users`);
      const data = res.data;
      // console.log(data);
      users.value = data;
      loading.value = false;
    };
    getUsers();

    return { users, loading };
  },
};
</script>

<style></style>
