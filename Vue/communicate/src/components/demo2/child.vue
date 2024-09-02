<template>
  <div class="body">
      <ul>
          <li v-for="item in list">{{ item }}</li>
      </ul>
  </div>

  <!-- 使用生命周期 -->
   <p>{{ msg }}</p>
</template>

<script setup>
import { ref,computed,watch,onBeforeUpdate } from "vue";

const _list = ref(['html', 'css'])
const props = defineProps({
  msg: {
    type: String,
    default: null
  }
})

// // list.value.push(props.msg)// 这样不会触发视图更新 因为加载时的msg是空的 但是他不会二次执行
const list = computed(() =>{
  // return [..._list.value, props.msg] 只能增加一次 
  // 这样会导致默认新增一个为空的数据 所以增加一层if判断
  if (props.msg) {
    _list.value.push(props.msg)
    
  }
  return [..._list.value]
})

// watch(
//   () => props.msg,
//   (newVal,oldVal)=>{
//     _list.value.push(newVal)
//   }
// )

// 使用生命周期 当html中的值发生变化时触发 所以加了个p标签
// onBeforeUpdate(() =>{
//   // console.log(props.msg);
//   if (props.msg) {
//     _list.value.push(props.msg)
//   }
// })


</script>

<style lang="scs" scoped>

</style>