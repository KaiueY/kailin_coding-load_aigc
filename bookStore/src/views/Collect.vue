  <template>
    <div class="container mx-auto p-4">
      <van-tabs v-model:active="activeTab">
        <van-tab title="最近阅读">
          <div class="grid grid-cols-2 gap-4">
            <BookCard v-for="book in recentState" :key="book.id" :book="book" :initialFavorite="isFavorite(book.id)"
              ref="bookRefs" @delete="handleDelete" @favorite="handleFavorite" />
          </div>
        </van-tab>
        <van-tab title="藏书">
          <div class="grid grid-cols-2 gap-4">
            <BookCard v-for="book in favoriteState" :key="book.id" :book="book" :initialFavorite="isFavorite(book.id)"
              ref="bookRefs" @delete="handleDelete" @favorite="handleFavorite" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </template>

<script setup>
import { ref, toRefs, onMounted } from 'vue'
import BookCard from '../components/BookCard.vue'
import { useCllectStore } from '../store/Collect'
import { showToast } from 'vant';

const cllectStore = useCllectStore()

const { recentState, favoriteState } = toRefs(cllectStore)

const activeTab = ref(0)

const favorites = ref(new Set())
const bookRefs = ref([])

// 处理删除操作
const handleDelete = (bookId) => {
  // 从recentState和favoriteState中删除该书
  recentState.value = recentState.value.filter(book => book.id !== bookId)
  favoriteState.value = favoriteState.value.filter(book => book.id !== bookId)

  // 如果已收藏，更新收藏状态
  favorites.value.delete(bookId)
  showToast('删除成功！')
}

// 处理收藏操作
const handleFavorite = (bookId, isFavorite) => {
  const book = recentState.value.find(book => book.id === bookId) ||
    favoriteState.value.find(book => book.id === bookId)

  if (isFavorite) {
    favorites.value.add(bookId)
    if (book && !favoriteState.value.some(favBook => favBook.id === bookId)) {
      favoriteState.value.push(book)
      showToast('已收藏')
    }
  } else {
    favorites.value.delete(bookId)
    showToast('已取消')
    favoriteState.value = favoriteState.value.filter(book => book.id !== bookId)
  }
}

// 检查是否已收藏
const isFavorite = (bookId) => {
  return favorites.value.has(bookId)
}

onMounted(() => {
  bookRefs.value = bookRefs.value.map(ref => ref?.exposeProxy)
})
</script>
