<script setup>
import { computed } from 'vue';
import {useStore} from './store/gvuex'

const store = useStore()
const count = computed(() => store.state.count)
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>

<style scoped>


</style>
