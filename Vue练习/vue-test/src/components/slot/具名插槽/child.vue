<template>
    <!-- 子组件 -->
    <div class="card">
        
      <div class="card-header">
      </div>
      <slot></slot>
      <span>具名插槽</span>
<hr>
      <slot name="top">🌧️</slot>
        <slot name="bottom"></slot>
      <div class="card-body">
        <hr>
        <span>默认插槽</span>
        <hr>
        <slot></slot>
        <slot>78777</slot>
        <slot></slot>
      </div>
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