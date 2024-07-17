<template>
    <div class="error-page">
        <div class="error-box">
            <div class="error-code">404 Not Found</div>
            <div class="error-desc">啊哦~ 页面跑丢了</div>
            <div class="error-handle">
                <router-link to="/">
                    <el-button type="primary" size="large">返回首页</el-button>
                </router-link>
                    <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
    router.go(-1);
    // window.history.go(-1)
}
</script>

<style lang="css" scoped>
.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #eef0fc;
    box-sizing: border-box;
}

.error-box {
    width: 400px;
    background-color: #fff;
    padding: 80px 50px;
    border-radius: 5px;
}

.error-code {
    line-height: 1;
    font-size: 60px;
    font-weight: bold;
    color: var(--el-color-primary);
    margin-bottom: 20px;
    text-align: center;
}

.error-desc {
    font-size: 20px;
    color: #777;
    text-align: center;
}

.error-handle {
    margin-top: 50px;
    text-align: center;
}

.error-btn {
    margin-left: 100px;
}

</style>