// hooks/useArticles.ts
import { ref, onMounted } from 'vue';
import { useArticleStore } from '../store/article';

export function useArticles() {
  const store = useArticleStore();
  const { articles } = store;
  const currentPage = ref(1);

  const loadArticles = async () => {
    await store.getArticles(currentPage.value);
  };

  onMounted(() => {
    loadArticles();
  });

  const loadMore = async () => {
    currentPage.value += 1;
    await loadArticles();
  };

  return {
    articles,
    loadMore,
  };
}