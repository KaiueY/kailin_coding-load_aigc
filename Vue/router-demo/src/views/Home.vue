<template>
    <div class="home">
        <header class="header">
            <div class="title">旅梦</div>
            <div class="user-info">欢迎admin</div>
        </header>
        <section class="body">
            <aside class="menu">
                <ul>
                    <li class="menu-item" v-for="item in menu" :key="item.id">
                        <router-link :to="item.path">{{ item.name }}</router-link>
                    </li>
                </ul>

            </aside>
            <main class="main">
                <RouterView />
            </main>
        </section>

    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const menu = ref([
    { id: 1, name: '班级管理', path: './class' },
    { id: 2, name: '讲师列表', path: '/teacher' },
    { id: 3, name: '就业管理', path: './job' }
])
</script>

<style lang="css" scoped>
.header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    background-color: #81538b;
    color: aliceblue;
}

.title {
    font-size: 30px;
}

.body {
    display: flex;
    height: calc(100vh - 80px);
}

.menu {
    width: 180px;
    background-color: #364a62fa;

}
.home{
    height: 100vh;
}
.menu-item{
    height: 50px;
}
.menu-item a{
    color: aliceblue;
    font-size: 20px;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    line-height: 50px;
}
.menu-item a:hover{
    background-color: rgb(59, 59, 28);
}

</style>