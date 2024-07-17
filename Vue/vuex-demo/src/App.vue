<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import AppHeader from './components/AppHeader.vue';

const store = useStore() // hooks 编程
console.log(store.state.count);
const count = computed(() => store.state.count)

const increment =()=>{
  // 派出increment 方法
  console.log('///////////');
  store.dispatch('increment')
}
</script>

<template>
 {{count}}
 <!-- <button @click="() => store.commit('increment')">➕</button> -->
 <button @click="increment">➕</button>
 <AppHeader/>
</template>


<style scoped>

</style>
