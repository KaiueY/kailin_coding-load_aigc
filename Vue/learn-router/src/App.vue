<template>
  <nav>
    <router-link to="/index">首页</router-link>|
    <!-- <RouterLink to="/">Go to Home</RouterLink> -->
    <router-link to="/hot/:id">沸点</router-link>|
    <router-link to="/bot">Bot</router-link>
  </nav>
  
  <!-- 路由入口 -->
  <!-- <router-view> </router-view> -->
  <RouterView />

</template>

<script setup>

</script>

<style lang="css" scoped>

</style>