<template>
    <div class="flex items-center p-4 bg-black text-white relative">
      <img :src="avatar" alt="avatar" class="w-16 h-16 rounded-full">
      <div class="ml-4">
        <div class="text-xl font-bold">{{ nickname }}</div>
        <div v-if="!isEditing" class="text-sm text-gray-400 cursor-pointer" @click="startEditing">
          {{ signature || '编辑个人资料' }}
        </div>
        <van-field
          v-else
          v-model="signature"
          class="text-sm text-gray-400"
          @blur="stopEditing"
          :autosize="true"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted , nextTick } from 'vue';
  import { Field } from 'vant';
  
  // 用户信息
  const avatar = ref('https://via.placeholder.com/150'); // 头像路径
  const nickname = ref('凯淋笑嘻嘻 · Y'); // 昵称
  const signature = ref(''); // 个性签名，如果没有个性签名则为空字符串
  
  const isEditing = ref(false);
  
  const startEditing = () => {
    isEditing.value = true;
    nextTick(() => {
      document.querySelector('input').focus();
    });
  };
  
  const stopEditing = () => {
    isEditing.value = false;
  };
  
  // 点击页面其他地方退出编辑模式
  const handleClickOutside = (event) => {
    if (!event.target.closest('.van-field')) {
      stopEditing();
    }
  };
  
  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
  </script>
  
  <style scoped>
  .bg-black {
    background-color: #000;
  }
  </style>