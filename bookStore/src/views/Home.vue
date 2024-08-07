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
            <img v-for="book in booksListState" :key="book.id" :src="book.image"
                class="w-24 flex-none h-36 rounded-lg shadow" :alt="book.title">
        </section>

        <!-- 为你推荐部分 -->
        <section class="mt-4">
            <div class="text-x font-bold mb-3 ml-2 flex"><span>为你推荐</span> <van-icon name="arrow" /></div>
            <div class="grid grid-cols-3 gap-4">
                <div v-for="recommendation in bookCommendState" :key="recommendation.id"
                    class="bg-gray-100 rounded-lg shadow p-2">
                    <img :src="recommendation.image" class="w-full h-28 rounded-lg" :alt="recommendation.title">
                    <div class="mt-2 text-sm">{{ recommendation.title }}</div>
                    <div v-if="recommendation.description" class="text-xs text-gray-500">{{ recommendation.description
                        }}</div>
                </div>
            </div>
            <div class="flex justify-center mt-4">
                <van-button type="primary" round @click="changeBooks">换一批</van-button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import { useHomeStore } from '../store/homeStore';

const homeStore = useHomeStore();
const { topBarState, booksListState, bookCommendState } = toRefs(homeStore);

const images = [
    'https://www.xczim.com/img/libs/wenhua00.jpg',
    'https://www.xczim.com/img/libs/wenhua02.jpg',
    'https://www.xczim.com/img/libs/wenhua01.jpg',
    'https://p0.ssl.qhimgs1.com/sdr/400__/t01fc864191a7d6a50e.png',
];


const changeBooks = () => {
    // 书籍切换逻辑
};
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
