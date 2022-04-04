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
import { ref } from "vue";
import UserPage from "../users/UserPage.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    UserPage,
  },
  setup() {
    const store = useStore();
    const count = computed(() => store.state.usersModule.count);
    const users = computed(() => store.getters["usersModule/setUsers"]);
    const loading = ref(false);
    async function getUsers() {
      loading.value = true;
      await store.dispatch("usersModule/fetchUsers");
      loading.value = false;
    }
    getUsers();

    return { users, loading, store, count };
  },
};
</script>

<style></style>
