<template>
    <div>
        <h1>Home</h1>
        <button @click="goHot">去沸点</button>
    </div>
</template>

<script setup>
// import router from '@/router';
// import router from '../router'
import { useRouter } from 'vue-router'//加上const rutuer = useRouter() 可以避免导入router from...的操作

const router = useRouter()
const goHot = () => {
    console.log(router);
    // router.push('./hot')
    // replace方法不会留下历史记录 不能回退
    // router.replace('./hot')

    //参数传递
    // router.push({path:'./hot',query:{id:123}})//会在路径添加参数 ?id=123
    router.push({ name: 'hot', params: { id: 123 } })

}
</script>

<style lang="css" scoped>
.login-wrap {
    width: 400px;
    padding: 20px;
    position: relative; /* 为了定位伪元素 */
}

.login-wrap::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #6eabcc;
    opacity: 0.3;
    z-index: -1; /* 确保伪元素在内容之下 */
}

.flex, .btn, label, input {
    position: relative; /* 确保这些元素位于伪元素之上 */
    z-index: 1;
}
</style>
