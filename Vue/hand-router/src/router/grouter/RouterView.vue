<template>
    <component :is="component"></component>
</template>

<script setup>
    import { computed } from 'vue';
    import Home from '../../pages/Home.vue';
    import About from '../../pages/About.vue'
    import { userRouter } from './index';


    const router = userRouter();
    console.log(router);
    // router-view 动态组件展示 依赖于url变化 并不是私有的 所以不需要ref
    const component = computed(() =>{
        const route = router.routes.find(
            (route)=>route.path==router.current.value
        )
        console.log('///////////');
        return route? route.component: null;
    })
</script>