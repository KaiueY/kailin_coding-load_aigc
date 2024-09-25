<template>
    <div>
        father
    </div>
    <hr>
    <child>
        <template #top>
            <div>top</div>
        </template>
        默认插槽
        
        <template #bottom>
            <div>bottom</div>
        </template>
    </child>
        
</template>

<script setup>
import child from './child.vue';
</script>

<style lang="css" scoped>

</style>