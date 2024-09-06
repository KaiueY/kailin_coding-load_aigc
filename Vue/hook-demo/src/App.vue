<script setup>
import {ref,onMounted} from 'vue'
import {useMouse} from './hooks/useMouse'
import {useTodos} from './hooks/usrTodos.js'

// const {x,y} = useMouse()
// 坐标逻辑
// const x = ref(0)
// const y = ref(0)
// const update = (event)=>{
//   x.value = event.pageX
//   y.value = event.pageY
// }
// onMounted(()=>{
//   window.addEventListener('mousemove',update)
// })

const {title , active , all , todos, allDone , clear} = useTodos()
</script>

<template>
  <div>
    <!-- {{ x }} , {{ y }} -->

    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active<all" @click="click">清理</button>

    <ul v-if="todo.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done">
        <span :class="{done:todo.done}">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else> 暂无数据</div>
    <div> 
      全选 <input type="checkbox" v-model="allDone" />
      <span>{{ active }}/ {{ all }}</span>
    </div>
  </div>
</template>

