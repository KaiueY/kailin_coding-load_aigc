<template>
    <div class="header">
      <input type="text" placeholder="请输入要添加的项" v-model="newMsg">
      <button @click="add">确定</button>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const newMsg = ref('')

//定义事件
const emits = defineEmits(['addMsg'])
const add =() =>{
    emits('addMsg',newMsg.value)  //发布订阅
}


</script>

<style lang="css" scoped>

</style>


