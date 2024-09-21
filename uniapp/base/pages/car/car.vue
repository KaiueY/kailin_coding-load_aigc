<template>
  <view>
    car
  </view>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  uni.request({
    url: 'https://mock.mengxuegu.com/mock/65a91543c4cd67421b34c898/movie/movieList',
    data: {
      id: 1
    },
    // method: 'GET' // 确保请求方法正确
  }).then(res => {
    console.log(res);
    uni.setStorageSync('movie', '最受欢迎的电影');
    // uni.setStorage({
    //   key: 'movie', // 键名应该是 key 而不是 data
    //   data: 'popular'
    // })
  }).catch(err => {
    console.error('请求失败:', err);
  });
});
</script>

<style lang="scss">
/* 如果有自定义样式，可以在这里添加 */
</style>