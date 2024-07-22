<template>
    <div class="header">
      <input type="text" v-model="newMsg">
      <button @click="add">确定</button>
    </div>
  
    <Child :list="list" />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Child from './child.vue'
  
  const newMsg = ref('')
  const list = ref(['html', 'css'])
  
  const add = () => {
    list.value.push(newMsg.value)
  }
  </script>
  
  <style lang="css" scoped>
  
  </style>