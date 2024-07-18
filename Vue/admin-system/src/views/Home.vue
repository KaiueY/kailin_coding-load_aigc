<template>
    <div class="wrapper">
        <VHeader/>
        <VSidebar/>
        <main class="content-box">
            <router-view/>
        </main>
    </div>
</template>

<script setup>
import VHeader from "../components/Header.vue";
import VSidebar from "../components/Sidebar.vue";
</script>

<style lang="css" scoped>
.wrapper {
    height: 100vh;
    overflow: hidden;
}
</style>