<script setup>
</script>

<template>
  <nav class="bg-gray-800 text-white p-4">
    <router-link to="/" class="hover:text-gray-300 mr-4">首页</router-link>
    <router-link to="/cart" class="hover:text-gray-300 mr-4">购物车</router-link>
    <router-link to="/login" class="hover:text-gray-300">登录</router-link>
  </nav>
  <div>
    <RouterView />
  </div>

</template>

<style scoped></style>
