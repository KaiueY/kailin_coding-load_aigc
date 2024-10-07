<template>
    <div>
        father
    </div>
    <hr>
    <child>来自于父组件的数据</child>
    <child></child>
    <hr>
    <p>判断是否null能够显示</p>
    <child v-if="data">{{ data  }}</child>
    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import child from './child.vue';

let data = ref(undefined)
onMounted(()=>{
    setTimeout(() => {
    data.value = 1
    console.log('timeOut',data.value);
    
},1200);
setInterval(()=>{
    console.log('interval',data.value);
    
    data.value += 5
},1200)

})


</script>

<style lang="css" scoped>

</style>