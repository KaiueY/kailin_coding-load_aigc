<template>

    <child ref="childRef"/>
  <div class="body">
    <ul>
      <li v-for="item in childRef?.list">{{item}}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {onMounted} from 'vue'
import child from './child.vue'

const childRef = ref(null)
onMounted(() => {
  console.log(childRef.value.list);
})
// console.log(childRef.value);

</script>

<style lang="css" scoped>

</style>