<template>
    <div class="wrapper">
        <VHeader/>
        <VSidebar/>
        <main class="content-box" :class="{'content-collapse':sidebarStore.collapse}">
            <router-view/>
        </main>
    </div>
</template>

<script setup>
import { useSidebarStore } from "../store/sidebar";
import VHeader from "../components/Header.vue";
import VSidebar from "../components/Sidebar.vue";
import { onMounted } from "vue";

const sidebarStore = useSidebarStore();
const collapseChange = () => {
    sidebarStore.handleCollapse()
}

onMounted(() => {
    if(document.body.clientWidth < 1213){
        collapseChange()
    }
})


</script>

<style lang="css" scoped>
.wrapper {
    height: 100vh;
    overflow: hidden;
}
.content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 78px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left 0.3s ease-in-out;
    transition: left 0.3s ease-in-out;
    background: #eef0fc;
    overflow: hidden;
}

.content {
    width: auto;
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
    box-sizing: border-box;
}

.content::-webkit-scrollbar {
    width: 0;
}

.content-collapse {
    left: 65px;
}

</style>