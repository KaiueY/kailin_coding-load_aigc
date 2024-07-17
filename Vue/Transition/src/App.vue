<script setup>
import { ref } from 'vue';

const name = '旅梦开发团';
const isActive = ref(true);
</script>

<template>
  <div class="page">
    <div class="card">
      <div class="card__header">
        <h3 class="card-title">{{ name }}</h3>
        <div class="card-subtitle">Transition & Animation</div>
      </div>
      <div class="card__content">
        <div :class="['emoji', {hidden: !isActive}]">🐑</div>
        <!--
        <transition name="pulse">
          <div v-if="isActive" class="emoji">🌳</div>
        </transition>
        -->
        <!-- <transition 
          class="animate__tada"
          enter-active-class="animate__animated animate__infinite"
          leave-active-class="animate__animated animate__infinite"
        >
          <div v-if="isActive" class="emoji">🌳</div>
        </transition> -->
      </div>
      <div class="card__action">
        <button type="button" @click="isActive=!isActive;">请按这里</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import './styles/app.css';
@import './styles/card.css';
/* @import './styles/animation.css'; */
</style>
