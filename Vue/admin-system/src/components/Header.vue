<template>
    <header class="header">
        <div class="header-left">
            <img class="logo" src="../assets/images/logo.svg">
            <div class="web-title">后台管理系统</div>
            <div class="collapse-btn" @click="collaseChange">
                <el-icon v-if="sidebarStore.collapse">
                    <Expand />
                </el-icon>
                <el-icon v-else>
                    <Fold />
                </el-icon>
            </div>
        </div>
        <div class="header-right">
            <el-avatar class="user-avator" :size="30" :src="imgurl" />
            <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    {{ username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <!-- 具名插槽 -->
                <template #dropdown>
                    <el-dropdown-menu>
                        <a href="https://github.com/linxin/vue-manage-system" target="_black">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a>
                        <a href="https://github.com/linxin/vue-manage-system" 
                        target="_black"
                        
                        >
                            <el-dropdown-item>官方文档</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </header>
</template>
<script setup>
import { ref } from 'vue'
import { useSidebarStore } from '../store/sidebar'
import { useRouter } from 'vue-router';

const router = useRouter()
const sidebarStore = useSidebarStore()

const collaseChange = () => {
    sidebarStore.handleCollapse()
}

const imgurl = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')
const username = localStorage.getItem('ms_name') || ''
const handleCommand = (command) =>{
    if(command == 'loginout'){
        localStorage.removeItem('ms_name')
        router.push('/login')
    }
}

</script>
<style setup>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    color: var(--header-text-color);
    background-color: var(--header-bg-color);
    border-bottom: 1px solid #ddd;
}

.header-left {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 100%;
}

.logo {
    width: 35px;
}

.web-title {
    margin: 0 40px 0 10px;
    font-size: 22px;
}

.collapse-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    opacity: 0.8;
    font-size: 22px;
}

.collapse-btn:hover {
    opacity: 1;
}

.header-right {
    float: right;
    padding-right: 50px;
}

.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}

.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}

.btn-icon {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--header-text-color);
    margin: 0 5px;
    font-size: 20px;
}

.btn-bell-badge {
    position: absolute;
    right: 4px;
    top: 0px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: var(--header-text-color);
}

.user-avator {
    margin: 0 10px 0 20px;
}

.el-dropdown-link {
    color: var(--header-text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    /* text-decoration: none; */
}

.el-dropdown-menu__item {
    text-align: center;
}
</style>
y