<template>
    <div class="nav-list">
        {{ count  }}
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore() // hooks 编程
console.log(store.state.count);
const count = computed(() => store.state.count)
</script>

<style lang="css" scoped>

</style>