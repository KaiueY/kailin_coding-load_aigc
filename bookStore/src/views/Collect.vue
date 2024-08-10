<template>
    <div class="container mx-auto p-4">
      <van-tabs v-model:active="activeTab">
        <van-tab title="最近阅读">
          <div class="grid grid-cols-2 gap-4">
            <BookCard
              v-for="book in recentState"
              :key="book.id"
              :book="book"
              :initialFavorite="isFavorite(book.id)"
              @delete="handleDelete"
              @favorite="handleFavorite"
            />
          </div>
        </van-tab>
        <van-tab title="藏书">
          <div class="grid grid-cols-2 gap-4">
            <BookCard
              v-for="book in favoriteState"
              :key="book.id"
              :book="book"
              :initialFavorite="isFavorite(book.id)"
              @delete="handleDelete"
              @favorite="handleFavorite"
            />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </template>
  
  <script setup>
  import { ref, toRefs } from 'vue'
  import BookCard from '../components/BookCard.vue'
import { useCllectStore } from '../store/Collect';

const cllectStore = useCllectStore()

const {recentState,favoriteState} = toRefs(cllectStore)

  
  const activeTab = ref(0)

  
const favorites = ref(new Set())
  
  const handleDelete = (bookId) => {
    // 处理删除操作
    console.log('删除书籍ID:', bookId)
  }
  
  const handleFavorite = (bookId, isFavorite) => {
    // 处理收藏操作
    if (isFavorite) {
      favorites.value.add(bookId)
    } else {
      favorites.value.delete(bookId)
    }
    console.log('收藏书籍ID:', bookId, '状态:', isFavorite)
  }
  
  const isFavorite = (bookId) => {
    return favorites.value.has(bookId)
  }
  </script>