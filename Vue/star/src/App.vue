<script setup>
import { ref } from 'vue';
import Rate from './components/Rate1.vue'

let score = ref(2);
function update(num){
  score.value = num;

}


</script>

<template>
  <div>
    <Rate :value="score" theme="yellow" @update-rate="update" />

  </div>
</template>

<style scoped>

</style>
