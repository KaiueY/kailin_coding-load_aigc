<template>
    <div class="container mx-auto p-4">
      <van-tabs v-model:active="activeTab">
        <van-tab title="最近阅读">
          <div class="grid grid-cols-2 gap-4">
            <BookCard
              v-for="book in recentBooks"
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
              v-for="book in favoriteBooks"
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
  import { ref } from 'vue'
  import BookCard from '../components/BookCard.vue'
  
  const activeTab = ref(0)
  const recentBooks = ref([
    { id: 1, title: '书籍1', author: '作者1', cover: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg' },
    { id: 2, title: '书籍2', author: '作者2', cover: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg' },
    // 更多书籍...
  ])
  const favoriteBooks = ref([
    { id: 3, title: '书籍3', author: '作者3', cover: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg' },
    { id: 4, title: '书籍4', author: '作者4', cover: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg' },
    // 更多书籍...
  ])
  
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