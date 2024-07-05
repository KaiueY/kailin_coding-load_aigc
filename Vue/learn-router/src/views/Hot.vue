<template>
    <div>
        Hot ---{{ $route.params.id }}--
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    const rute=useRoute()
    // console.log(rute);
    console.log(rute);

   // 通过defineProps获取参数 可以直接在template 使用{{ id }} 显示
    // const props = defineProps({
    //     id:String
    // })
    // console.log(props.id);
</script>

<style lang="css" scoped>

</style>