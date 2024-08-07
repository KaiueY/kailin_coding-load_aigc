<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <!-- 用户信息部分 -->
    <div class="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <van-image class="w-16 h-16 rounded-full" src="https://via.placeholder.com/150" />
      <div>
        <h2 class="text-xl font-semibold">用户名</h2>
        <p class="text-gray-600">user@example.com</p>
      </div>
    </div>

    <!-- 功能列表 -->
    <div class="mt-4">
      <van-cell-group>
        <van-cell title="我的收藏" icon="star-o" is-link @click="navigateTo('/favorites')" />
        <van-cell title="阅读记录" icon="records" is-link @click="navigateTo('/reading-history')" />
        <van-cell title="账户设置" icon="setting-o" is-link @click="navigateTo('/account-settings')" />
        <van-cell title="意见反馈" icon="feedback-o" is-link @click="navigateTo('/feedback')" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
/* 自定义样式 */
</style>