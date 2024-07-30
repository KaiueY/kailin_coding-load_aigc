<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/1f3e3b1d4f834d0eaa10505b94433e02~tplv-73owjymdk6-watermark.image?rk3s=f64ab15b&x-expires=1722580686&x-signature=Wtyj6eJhkJsytiyXUGnnzP8BGOg%3D"
                    alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
        </div>
        <p class="register" @click="register">新用户？点击这里注册</p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from '@/api'
import { useRouter } from "vue-router";

const router = useRouter()
const username = ref('')
const password = ref('')
// 可以自带参数 values 可以存储 因为van-field有name属性
const onSubmit = async (values) => {
    // 前端判断输入是否合法 不必发送请求 此处忽略
    const res = await axios.post('/user/login', values)
    localStorage.setItem('userInfo',JSON.stringify(res.data))
    localStorage.setItem('token',res.token)
    
    // console.log(res);
    if (+res.code == 800) {
        router.push('/noteClass')
    }
}
const register = () =>{
    router.push('/register')
}
</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0, 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    h1 {
        height: 0.6933rem;
        font-size: 0.48rem;
        text-align: center;
        line-height: 0.6933rem;
        margin-top: 1.12rem;
    }

    .login-wrapper {
        width: 7.74rem;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 auto;
        border-radius: 0.3rem;
        margin-top: 1.7rem;
        box-shadow: 0 0 0.533rem rgba(0, 0, 0, 0.1);

        .avatar {
            width: 2.4rem;
            height: 2.4rem;
            margin: 1rem auto 0.77rem;
            border-radius: 50%;
            overflow: hidden;


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }
    }

    .register {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
    }
}

:deep(.van-field__label) {
    width: 45px;
}
</style>