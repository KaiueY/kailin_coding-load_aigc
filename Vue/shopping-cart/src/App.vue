<script setup>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'



// import HelloWorld from './components/HelloWorld.vue'
// import { useStore } from 'vuex';
// import { computed } from 'vue';

// const store = useStore()//hooks函数
// // 依赖的vuex状态发生改变时
// const products = computed(()=>store.state.products.all)
// console.log(products,'---------------');
// // commit 提供一个mutation dispatch 派出一个action
// store.dispatch('products/getAllProducts')

</script>

<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Product</h2>
    <ProductList/>
    <hr/>
    <ShoppingCart/>
  </div>

</template>

<style scoped>
</style>
