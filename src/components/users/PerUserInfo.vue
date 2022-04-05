<template>
  <div class="container">
    <div class="card my-5 p-5">
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else>
        <p class="h2 mb-5">User Information</p>
        <p class="h6">Name : {{ userInfo.name }}</p>
        <p class="h6">User name : {{ userInfo.username }}</p>
        <p class="h6">Email : {{ userInfo.email }}</p>
        <p class="h6">Address :</p>
        <!-- <ul class="h6">
          <li>city : {{ userInfo.address.city }}</li>
          <li>street : {{ userInfo.address.street }}</li>
          <li>zipcode : {{ userInfo.address.zipcode }}</li>
        </ul> -->
        <p class="h6">Phone : {{ userInfo.phone }}</p>
      </div>
    </div>
    <button class="btn btn-dark" @click="goBack">Back to users</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
// import axios from "axios";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.users.count);
    const loading = ref(true);
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const getUserInfo = async () => {
      store.dispatch("usersModule/fetchSingleUser", id);
      loading.value = false;
    };
    const userInfo = computed(() => store.getters["usersModule/setSingleUser"]);
    getUserInfo();
    const goBack = () => {
      router.push({ name: "users" });
    };

    return {
      goBack,
      loading,
      count,
      store,
      userInfo,
    };
  },
};
</script>

<style></style>
