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
    const component = computed(() =>{
        const route = router.routes.find(
            (route)=>route.path==router.current.value
        )
        console.log('///////////');
        return route? route.component: null;
    })
</script>