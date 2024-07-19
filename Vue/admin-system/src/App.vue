<script setup>
// import TestSlot from './TestSlot.vue'
import { useSidebarStore } from "./store/sidebar";

const sidebarStore = useSidebarStore();


</script>

<template>

  <!-- <div>
    <TestSlot>
      <div> 默认slot</div>
      <template #header>
        <header>header slot</header>
      </template>
      <template #footer>
        <header>Foot  slot</header>
      </template>
    </TestSlot>
  </div> -->
  <router-view>
    
  </router-view>
</template>

<style scoped>

</style>
