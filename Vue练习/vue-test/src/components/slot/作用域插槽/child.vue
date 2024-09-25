<template>
    <!-- 子组件 -->
    <div class="card">
      <div v-for="item in items" :id="item.id">
          
      </div>
    </div>
  </template>
  
  <script setup>
  
    const items = [
      {
        id: 1,
        name: '张三',
        age: 18
      },
      {
        id: 2,
        name: '李四',
        age: 20
      },
      {
        id: 3,
        name: '王五',
        age: 22
      }
    ]
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
  }
  .card-header {
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
  </style>