<template>
    <div class="border p-2 rounded-lg shadow-lg">
      <img :src="book.cover"  class="w-full h-48 object-cover rounded-md"/>
      <h2 class="mt-2 text-lg font-bold">{{ book.title }}</h2>
      <p class="text-gray-600">{{ book.author }}</p >
      <div class="flex justify-between mt-2">
        <van-icon name="delete" @click="onDelete" class="text-red-500"/>
        <van-icon :name="isFavorite ? 'star' : 'star-o'" @click="onFavorite" class="text-yellow-500"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref, watchEffect } from 'vue'
  
  const props = defineProps({
    book: {
      type: Object,
      required: true,
    },
    initialFavorite: {
      type: Boolean,
      default: false,
    },
  })
  
  const isFavorite = ref(props.initialFavorite)
  
  const onFavorite = () => {
    isFavorite.value = !isFavorite.value
    emits('favorite', props.book.id, isFavorite.value)
  }
  
  const onDelete = () => {
    emits('delete', props.book.id)
  }
  </script>
  
  <style scoped>

  </style>