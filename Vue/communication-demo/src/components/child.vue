<template>
<h1>This is child</h1>
<h2>{{ count }}</h2>
<!-- <h2>{{ message1 }}</h2> -->
</template>

<script setup>
import { onMounted } from 'vue';

defineProps({
    count:{
        type:Number,
        default: 0 
    }
})
// const props=defineProps({
//     message1:{
//         type:String,
//         default:''
//     }
// })


</script>

<style lang="sss" scoped>

</style>