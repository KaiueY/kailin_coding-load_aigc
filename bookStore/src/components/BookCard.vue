<template>
  <div class="border p-2 rounded-lg shadow-lg">
    <img :src="book.image" class="w-full h-48 object-cover rounded-md"/>
    <h2 class="mt-2 text-lg font-bold">{{ book.title }}</h2>
    <p class="text-gray-600">{{ book.author }}</p>
    <div class="flex justify-between mt-2">
      <van-icon name="delete" @click="onDelete" class="text-red-500"/>
      <van-icon :name="isFavorite ? 'star' : 'star-o'" @click="onFavorite" class="text-yellow-500"/>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    book: {
      type: Object,
      required: true,
    },
    initialFavorite: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['delete', 'favorite'],
  setup(props, { emit, expose }) {
    const isFavorite = ref(props.initialFavorite)

    const onFavorite = () => {
      isFavorite.value = !isFavorite.value
      emit('favorite', props.book.id, isFavorite.value)
    }

    const onDelete = () => {
      emit('delete', props.book.id)
    }

    expose({
      onFavorite,
      onDelete,
    })

    return {
      isFavorite,
      onFavorite,
      onDelete,
    }
  },
})
</script>

<style scoped>
</style>
