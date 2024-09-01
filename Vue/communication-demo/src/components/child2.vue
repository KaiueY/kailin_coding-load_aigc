<template>
<h2>This is child2</h2>
<button @click="countAdd">add</button>
</template>

<script setup>

const emit = defineEmits(['add'])
const countAdd = ()=>{
    emit('add')
}
</script>
<style lang="css" scoped>

</style>