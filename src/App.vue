<template>
  <div>
    <HeaderPart />

    <router-view></router-view>
  </div>
</template>

<script>
import HeaderPart from "./components/sections/HeaderPart.vue";
// import HomePage from "./components/pages/HomePage.vue";

export default {
  components: {
    HeaderPart,
    // HomePage,
  },
};
</script>

<style></style>
