<script setup>
import { useSidebarStore } from "./store/sidebar";

const sidebarStore = useSidebarStore();
console.log(sidebarStore);

</script>

<template>
  <router-view>
    
  </router-view>
</template>

<style scoped>

</style>
