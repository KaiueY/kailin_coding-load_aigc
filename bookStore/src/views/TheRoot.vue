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

<script setup lang="ts">
//ts
import TabBar from "../views/layout/TabBar.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const cachedComponents = computed(() => {
  return router
    .getRoutes()
    .filter((route) => route.meta.KeepAlive)
    .map((route) => route.name);
});
</script>

<style lang="less" scoped>
</style>