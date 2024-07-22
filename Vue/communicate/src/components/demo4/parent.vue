<template>
   <child v-model:list="list" />
  
    <div class="body">
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import child from './child.vue'
  

  const list = ref(['html', 'css'])
//   const handle = (e) => {
//     console.log(e);
//   }

  </script>
  
  <style lang="css" scoped>
  
  </style>