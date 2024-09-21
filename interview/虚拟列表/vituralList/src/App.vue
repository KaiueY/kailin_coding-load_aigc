<template>
  <div class="app">
    <vitualList :listData="data"/>
  </div>
</template>

<script setup>
import vitualList from './components/vitualList.vue'

const data = []
for(let i = 0;i<1000;i++){
  data.push(
    {
      id:i,
      value:i
    }
  )
}
</script>

<style lang="css" scoped>
.app{
  width: 400;
  height: 300px;
  border: 1px solid #000;
}
</style>