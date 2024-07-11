<template>
  <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Posts List</h1>
      <article 
          v-for="post in posts" 
          :key="post.id" 
          class="bg-white rounded-lg shadow-md p-4 mb-4"
      >
          <h2 class="text-xl font-semibold mb-2">
              <router-link  :to="{name:'Detail', params:{id: post.id}}">
              {{ post.title }}
              </router-link>
          </h2>
          <p class="text-gray-700">{{post.category}}</p>
      </article>
  </div>
</template>
<script setup>
import { getPosts } from '../api/index.js'
import { ref, onMounted } from 'vue'

const posts = ref([])

onMounted(async () => {
  const data = await getPosts()
  if (data) {
      posts.value = data
  }
})
</script>