<template>
    <div class="login">
        <div class="login-wrap">

            <div class="username flex">
                <label>账号：</label>
                <input type="text" placeholder="请输入账号" v-model="username">
            </div>
            <div class="password flex">
                <label>密码：</label>
                <input type="text" placeholder="请输入密码" v-model="password">
            </div>
            <div class="btn" @click="signIn">LOGIN</div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()
const signIn = () => {
    if (username.value === 'admin' && password.value === '123') {
        router.push('/home'); // 假设首页的路由路径为 '/home'
    } else {
        alert('用户名或密码错误！');
    }
}
</script>

<style lang="css" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, #989ba6, #559dd0);
    display: flex;
    justify-content: center;
    align-items: center;

}

.login-wrap {
    width: 400px;
    background-color: #6eabcc;
    opacity: 0.4;
    padding: 20px;
}

.flex {
    height: 100px;
    display: flex;
    align-items: center;
}

label {
    width: 60px;
    font-size: 20px;
}

input {
    flex: 1;
    font-size: 20px;
    padding: 5px;
}

.btn {
    width: 40%;
    font-size: 22px;
    padding: 10px 0;
    background-color: #7a397e;
    color: white;
    text-align: center;
    margin: 0 auto;
    border-radius: 10px;
    cursor: pointer;
}
</style>