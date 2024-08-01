<template>
    <div>
        <router-view></router-view>
        <div class="footer h-12">
            <TabBar class="fixed bottom-0" />
        </div>
    </div>
</template>
<script setup lang="ts">
    // ts语法
    import TabBar from '@/views/layout/TabBar.vue';
    
</script>