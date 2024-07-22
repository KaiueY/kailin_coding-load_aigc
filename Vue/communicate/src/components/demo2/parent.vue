<template>
  <div class="header">
    <input type="text" v-model="newMsg">
    <button @click="add">确定</button>
  </div>

  <Child :msg="val" />
</template>

<script setup>
import { ref } from 'vue';
import Child from './child.vue'

const newMsg = ref('')
const val = ref('')

const add = () => {
  val.value = newMsg.value
}

</script>

<style lang="css" scoped>

</style>