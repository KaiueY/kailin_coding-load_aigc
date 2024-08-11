<template>
  <div class="min-h-screen bg-pink-100 p-4">
    <!-- 用户信息部分 -->
    <div class="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <img class="w-16 h-16 rounded-full"
        src='https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/956891d61e9d4ceb8fc548013a1e3ef5~tplv-73owjymdk6-jj-mark:0:0:0:0:q75.awebp?rk3s=f64ab15b&x-expires=1723688691&x-signature=WKh7uLKybHrxKeJwl3sXjitsSkY%3D'
        alt="User Image" />
      <div>
        <h2 class="text-xl font-semibold">{{ userName }}</h2>
        <p class="text-gray-600">{{ signature }}</p>
      </div>
    </div>

    <!-- 功能列表 -->
    <div class="mt-4">
  <van-cell-group>
    <van-cell
      v-for="item in accountState"
      :key="item.id"
      :title="item.title"
      :icon="item.icon"
      is-link
      @click="navigateTo(item.url)"
    />
  </van-cell-group>
  <section class="flex justify-center m-10">
    <van-button type="default" class="w-1/2"  @click="onHandle">退出登录</van-button>
  </section>
  
</div>

  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import { useAccountSotre } from '../store/Account';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
import { getTime } from '../utils/time';


const userName = ref("");
const signature = ref("")
userName.value = localStorage.getItem("username") || "请先登录哦";
signature.value  =getTime(localStorage.getItem("username")?? '') 
const accountStore = useAccountSotre()
const { accountState } = toRefs(accountStore)

const router = useRouter()
const onHandle = () =>{
  // console.log('-------');
  localStorage.removeItem('password')
  localStorage.removeItem('username')
  showToast('退出成功')
  router.push('/login')
}

const navigateTo= (path) =>{
  router.push(path)
}
</script>

<style scoped>
/* 自定义样式 */
</style>