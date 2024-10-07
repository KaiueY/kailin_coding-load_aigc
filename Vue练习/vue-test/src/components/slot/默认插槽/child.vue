<template>
    <!-- 子组件 -->
    <div class="card">
        <slot>子组件的默认数据</slot>
    </div>
  </template>
  
  <script setup>
  // 这里不需要任何额外的逻辑
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