<template>
    <div class="bg-pink-50 p-3">

        <!-- 搜索框 -->
        <van-sticky>
            <div class="flex items-center h-12 p-2 bg-white">
                <van-search v-model="value" class="flex-grow bg-transparent outline-none px-2" placeholder="请输入搜索关键词" />
            </div>
        </van-sticky>

        <!-- 分类 榜单等 -->
        <div class="flex space-x-2 overflow-x-auto mt-4 pb-2 no-scrollbar">
            <div v-for="item in topBarState" :key="item.id" class="flex-none px-4 py-2 bg-white rounded-full shadow">
                {{ item.title }}
                <van-icon :name="item.icon" size="1rem" />
            </div>
        </div>
        <van-divider />
        <!-- 轮播图 -->
        <div>
            <div class="text-xl font-bold m-3">每日欣赏</div>
            <van-swipe :autoplay="3000" lazy-render :loop="true" class="h-52 md:h-96">
                <van-swipe-item v-for="image in images" :key="image" class="relative">
                    <img :src="image" alt="slide image" class="w-full h-full object-cover  rounded-lg p-1 " />
                </van-swipe-item>
            </van-swipe>
        </div>
        <van-divider />
        <!-- 书籍展示 -->
        <section class="flex space-x-4 overflow-x-auto mt-4 pb-2 no-scrollbar">
            <img v-for="book in booksListState" :key="book.id" v-lazy="book.image"
                class="w-24 flex-none h-36 rounded-lg shadow" :alt="book.title" src="data:image/jpeg;base64,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">
        </section>

        <!-- 为你推荐部分 -->
        <section class="mt-4">
            <div class="text-x font-bold mb-3 ml-2 flex"><span>为你推荐</span> <van-icon name="arrow" /></div>
            <div class="grid grid-cols-3 gap-4">
                <div v-for="recommendation in bookCommendState" :key="recommendation.id"
                    class="bg-gray-100 rounded-lg shadow p-2">
                    <img v-lazy="recommendation.image" class="w-full h-28 rounded-lg" :alt="recommendation.title">
                    <div class="mt-2 text-sm">{{ recommendation.title }}</div>
                    <div v-if="recommendation.description" class="text-xs text-gray-500">{{ recommendation.description
                        }}</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, toRefs,watch } from 'vue';
import { useHomeStore } from '../store/homeStore';

const value = ref('');

// 手写防抖函数
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// 定义防抖的打印函数
const debouncedLog = debounce((val) => {
  console.log(val);
}, 1000);

// 监听 value 变化，使用防抖函数
watch(value, (newVal) => {
  debouncedLog(newVal);
});

const homeStore = useHomeStore();
const { topBarState, booksListState, bookCommendState } = toRefs(homeStore);

const images  = [
    'https://www.xczim.com/img/libs/wenhua00.jpg',
    'https://www.xczim.com/img/libs/wenhua02.jpg',
    'https://www.xczim.com/img/libs/wenhua01.jpg',
    'https://p0.ssl.qhimgs1.com/sdr/400__/t01fc864191a7d6a50e.png',
];



</script>

<style>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
