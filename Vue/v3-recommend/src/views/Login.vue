<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Login</h1>
        <form @submit.prevent="handleSubmit">
            <div class="mb-4">
                <label for="username" 
                class="block text-gray-700 text-sm font-bold mb-2">
                Username:
                </label>
                <input
                    required
                     type="text" id="username" v-model="username"
                     class="shadow appearance-none border rounded w-full
                     py-2 px-3 text-gray-700 leading-tight focus:outline-none
                     focus:shadow-outline"
                />
            </div>
            <div class="mb-6">
                <label for="password" 
                class="block text-gray-700 text-sm font-bold mb-2">
                Password:
                </label>
                <input
                    required
                     type="password" id="password" v-model="password"
                     class="shadow appearance-none border rounded w-full
                     py-2 px-3 text-gray-700 leading-tight focus:outline-none
                     focus:shadow-outline"
                />
            </div>
            <button 
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold
                    py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >Login</button>
        </form>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

const handleSubmit = () => {
    if (username.value == 'admin' && password.value == '123456') {
        localStorage.setItem('isLoggedIn', 'true')
        router.push('/')
    } else {
        alert("用户名或密码错误")
    }
}

onMounted(() => {
    if (localStorage.getItem('isLoggedIn')) {
        console.log('不用重新登录');
        setTimeout(() => {
            router.push('/')
        }, 500)
    }
})
</script>