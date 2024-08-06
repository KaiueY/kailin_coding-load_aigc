
<template>
    <div class="bg-pink-50 p-3">
        <!-- 搜索框 -->
        <van-sticky>
            <div class="flex items-center h-12   p-2 bg-white">
                <van-search v-model="value" class="flex-grow bg-transparent outline-none px-2" placeholder="请输入搜索关键词" />

            </div>
        </van-sticky>

        <!-- 分类 榜单等 -->
        <section class="flex space-x-4 overflow-x-auto mt-4 pb-2 no-scrollbar">
            <div class="flex-none px-4 py-2 bg-white rounded-full shadow">分类</div>
            <div class="flex-none px-4 py-2 bg-white rounded-full shadow">榜单</div>
            <div class="flex-none px-4 py-2 bg-white rounded-full shadow">书单</div>
            <div class="flex-none px-4 py-2 bg-white rounded-full shadow">会员</div>
            <div class="flex-none px-4 py-2 bg-white rounded-full shadow">有声书</div>
        </section>
        <!-- 轮播图 -->

        <van-swipe :autoplay="3000" lazy-render :loop="true" :height="100" class="m-2">
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>

        <!-- 书籍展示 -->
        <section class="flex space-x-4 overflow-x-auto mt-4 pb-2 scrollbar">
            <img v-for="book in books" :key="book.id" :src="book.image" class="w-24 flex-none h-36 rounded-lg shadow"
                :alt="book.title">
        </section>

        <!-- 为你推荐部分 -->
        <section class="mt-4">
            <div class="text-xl font-bold mb-2">为你推荐</div>
            <div class="grid grid-cols-3 gap-4">
                <div v-for="recommendation in recommendations" :key="recommendation.id"
                    class="bg-gray rounded-lg shadow p-2">
                    <img :src="recommendation.image" class="w-full h-28 rounded-lg" :alt="recommendation.title">
                    <div class="mt-2 text-sm">{{ recommendation.title }}</div>
                    <div v-if="recommendation.description" class="text-xs text-gray-500">{{
                        recommendation.description }}</div>
                </div>
            </div>
            <div class="flex justify-center mt-4">
                <van-button type="primary" round @click="changeBooks">换一批</van-button>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const images = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
];

const books = ref([
    { id: 1, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名1' },
    { id: 2, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名2' },
    { id: 3, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名3' },
    { id: 4, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名4' },
    { id: 5, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名5' }
]);

const recommendations = ref([
    { id: 1, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名1', description: '描述1' },
    { id: 2, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名2', description: '描述2' },
    { id: 3, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名3' },
    { id: 4, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名4' },
    { id: 5, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名5' },
    { id: 6, image: 'https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg', title: '书名6' }
]);

const changeBooks = () => {
    // 书籍切换逻辑
    // 可以添加旋转动画
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