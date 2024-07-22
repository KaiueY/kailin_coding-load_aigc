<template>
    <div class="body">
        <ul>
            <li v-for="item in props.list">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scs" scoped>

</style>