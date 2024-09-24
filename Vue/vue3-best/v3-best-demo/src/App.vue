<script setup lang="ts">
fetch('/api/todos')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
</script>

<template>

</template>

<style scoped>

</style>
