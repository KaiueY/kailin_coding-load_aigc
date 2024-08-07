<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>

        <van-tabbar-item to="/chat">
            AI
            <template #icon>
                <!-- <van-icon class="iconfont" size="1.5rem" class-prefix="icon" name="chatgpt" /> -->
                <i class="iconfont icon-chatGPT"> </i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/collect">收藏</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/account">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';



const active = ref<number>(0)


</script>

<style lang="css" scoped></style>