<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue';
import { useArticleStore } from './store/article';

const store = useArticleStore()
const { articles } = toRefs(store)
const currentPage = ref(1)
onMounted(async () => {
  await store.getArticles(currentPage.value)
})
const loadMore = async()=>{
  currentPage.value += 1;
  await store.getArticles(currentPage.value);
}

</script>

<template>

  <div>

    <section>
      <article class="item" v-for="(item, index) in articles" :key="item.id">
        <div>{{ index }} {{ item.title }} </div>
      </article>
    </section>
    <button @click="loadMore">加载更多</button>
  </div>
</template>
<style scoped>
.item {
  height: 20vh;
}
</style>
