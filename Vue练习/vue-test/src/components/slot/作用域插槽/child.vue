<template>
  <!-- 子组件 -->
  <div class="card">
    <li v-for="item in items" :key="item.id">
      <slot :item="item">

        {{ item.name }} - {{ item.color }}
      </slot>
      
    </li>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const items = ref([
  { id: 1, name: '苹果', color: 'red' },
  { id: 2, name: '香蕉', color: 'yellow' },
  { id: 3, name: '葡萄', color: 'purple' }
])
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