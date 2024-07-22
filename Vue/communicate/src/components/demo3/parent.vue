<template>

  <child @addMsg="handle"/>
    <div class="body">
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import child from './chiled.vue'
  import { ref } from 'vue';
  
  const list = ref(['html', 'css'])
  const handle = (e) =>{
    // console.log(e);
    list.value.push(e)
  }
  </script>
  
  <style lang="css" scoped>
  
  </style>