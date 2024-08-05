<template>
   <div>
        <router-view v-slot="{Component}">
            <keep-alive :include="cachedComponents">
                <component :is="Component" />
            </keep-alive>
        </router-view>
        <div class="footer h-12">
            <TabBar class="fixed bottom-2" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import TabBar from '@/views/layout/TabBar.vue'
</script>

<style lang="css" scoped>

</style>