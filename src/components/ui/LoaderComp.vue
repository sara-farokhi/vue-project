<template>
  <div class="loading">
    <div
      class="spinner-border text-primary"
      style="width: 5rem; height: 5rem"
      role="status"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
