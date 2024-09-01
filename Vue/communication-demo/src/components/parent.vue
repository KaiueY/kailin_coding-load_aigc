<template>
    <h1>This is parent</h1>
    <hr>
    <Child :count="count"/>
    <hr>
    <child2 @add ='handleAdd'/>
</template>

<script setup>
import Child from '@/components/child.vue'
import child2 from '@/components/child2.vue'
 
import { ref } from 'vue';

const count = ref(0)
const  handleAdd = ()=> {
    count.value++
}
</script>

<style lang="css" scoped>

</style>