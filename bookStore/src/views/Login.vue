<template>
    <div class="w-screen h-screen">
        <van-nav-bar left-arrow>
            <template #right>
                <span class="text-xs text-gray-400">遇到问题</span>
            </template>
        </van-nav-bar>
        <h1 class="text-2xl font-bold text-center my-10">登录</h1>
        <van-form @submit="onSubmit" model="params">
            <van-cell-group inset>
                <van-field v-model="params.username" name="用户名" label="用户名" placeholder="请输入用户名"
                    :rules="[{ required: true, message: '请输入用户名' }]" />
                <van-field v-model="params.password" name=",密码" type="password" label="密码" placeholder="请输入密码"
                    :rules="[{ required: true, message: '请输入密码' }]" />


            </van-cell-group>
            <div style="mt-4" class="m-14">
                <van-button block color="#d2d2d2" native-type="submit">登录</van-button>
            </div>
            <div class="text-center" @click="toRegister">
                没有账号?点击注册
            </div>
            <van-field name="checkbox">
                <template #input>
                    <van-checkbox v-model="checked" shape="square">
                        <span class="text-xs ml-2">(必选)我同意</span>
                    </van-checkbox>
                    <a href="#">《用户协议》</a>和<a href="#">《用户条款》</a>

                </template>
            </van-field>
        </van-form>

    </div>
</template>

<script setup lang="ts">
import { showToast } from 'vant';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

// vant 表单 验证
// ts -类型约束 如果就这个地方使用 那么就在这里自定义约束吧
// type
interface LoginInfo {
    username: string
    password: string
}

const params = reactive<LoginInfo>({
    username: '',
    password: ''
})

const checked = ref<boolean>(false)

const router = useRouter()
const toRegister = () => {
    router.push('/register')
}

const onSubmit = () => {
    if (!checked.value) {
        showToast('请先同意必读条款')
        return
    }
    localStorage.setItem('username',params.username)
    localStorage.setItem('password',params.password)
    showToast('登录成功！')
    router.push('/home')
}

</script>

<style lang="css" scoped>
:deep(.van-icon-arrow-left) {
    @apply text-2xl text-black
}

:deep(.van-checkbox_icon--checked .van-icon) {
    @apply bg-[#e6723c] border-[#e6723c]
}
</style>