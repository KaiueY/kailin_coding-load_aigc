<template>
  <div>
    <Header :seller="sellerData" /> 
  </div>
</template>

<script setup>
import  Header from '@/components/header/Index.vue'
import {getSeller} from "@/api/index.js"
import { ref } from 'vue';


const sellerData  = ref({})
getSeller().then(res => {
  sellerData.value = res
  console.log(res);
})
</script>

<style lang="css" scoped>

</style>