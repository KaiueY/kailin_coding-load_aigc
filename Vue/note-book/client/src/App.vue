<template>
  <div id="app" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <van-button 
      :square="true"
      color="linear-gradient(to right, #4672b3, #ee5a24)"
      @click="publish" 
      block>
      NOTE  BOOK
    </van-button>
    <router-view v-slot="{ Component }">
      <transition name="slide-right" @before-leave="addDelay">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { back, currentRoute } = useRouter();
const touchStartX = ref(0);
const isSliding = ref(false);

const handleTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX;
};

const handleTouchEnd = (event) => {
  const touchEndX = event.changedTouches[0].clientX;
  if (touchEndX - touchStartX.value > 100 && currentRoute.value.name !== 'noteClass') {
    isSliding.value = true;
    setTimeout(() => {
      back();
      isSliding.value = false;
    }, 300); // 动画持续时间
  }
};

const publish = () => {
  if (currentRoute.value.name !== 'noteClass') {
    back();
  }
};

const addDelay = (el) => {
  if (isSliding.value) {
    el.style.transitionDelay = '0.3s'; // 延迟时间，与动画持续时间匹配
  }
};
</script>

<style lang="css" scoped>
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
