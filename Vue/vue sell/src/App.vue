<template>
  <div>
    <Header :seller="sellerData" /> 
  </div>
  <div class="tab">
    <div class="tab-wrapper">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-wrapper">
      <router-link to="/comment">评论</router-link>
    </div>
    <div class="tab-wrapper">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>
    <router-view />

  
</template>

<script setup>
import  Header from '@/components/header/Index.vue'
import {getSeller} from "@/api/index.js"
import { ref } from 'vue';


const sellerData  = ref({})
getSeller().then(res => {
  sellerData.value = res
  console.log(res);
})
</script>

<style lang="less" scoped>
@import "../src/assets/varible.less";

.tab{
  display: flex;
  height: 36px;
  justify-content: center;
  align-items: center;
  position: relative;
  .tab-wrapper{ // 修改这里，增加了 .tab-wrapper 的样式定义
    flex: 1;
    a{
      text-align: center;
      text-decoration: none;
      display: block; // 确保 a 标签是块级元素，可以填满 .tab-wrapper
      width: 100%;
      height: 100%;
      line-height: 36px;
      color: @color-font; // 使用变量设置文字颜色
      &:hover{
        color: @color-red; // 鼠标悬浮时的颜色变化
      }
      &.router-link-exact-active{
        color: @color-red;
        border-bottom: 2px solid @color-red;
      }
    }
  }
}
</style>