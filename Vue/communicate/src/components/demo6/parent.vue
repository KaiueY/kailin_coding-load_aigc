<template>
    <div class="header">
        <input type="text" v-model="newMsg">
        <button @click="add">确定</button>
    </div>
    <Child />
</template>

<script setup>
import Child from './child.vue'
import { ref, provide } from 'vue';

const newMsg = ref('')
const list = ref(['html', 'css'])

const add = () => {
    list.value.push(newMsg.value)
    newMsg.value = '' // 清空输入框
}
provide('list', list)
</script>

<style lang="css" scoped></style>

