<template>
 <div class="header">
      <input type="text" v-model="newMsg">
      <button @click="add">确定</button>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'


const newMsg = ref('')
const props = defineProps({
    list:{
        type:Array,
        default:()=>[]
    }
})
const emits = defineEmits(['update:list'])
const add = () => {
//   props.list.push(newMsg.value)
    const arr = props.list
    arr.push(newMsg.value)
    emits('update:list',arr)
}
</script>

<style lang="css" scoped>

</style>