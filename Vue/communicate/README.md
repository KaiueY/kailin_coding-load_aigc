# 组件通信
1. 父子通信 —— 父组件传值 子组件通过props接收
    - provide('list', list) 和 inject('list')  demo6
    - vuex 和 pinia
2. 子父通信 
    - 通过发布订阅机制  父组件订阅一个时间，子组件发布该事件。同时可以传递参数一起发布 父组件再定义函数获取该值
        const emits = defineEmits(['addMsg'])
const add =() =>{
    emits('addMsg',newMsg.value)  //发布订阅
}
<!-- 在emits中 可以传递多个参数，但是在父组件中，需要定义相同数量的变量接受  也可以用...args  -->
    二  <child v-model:list="list" />   demo4
    - 通过v-model传递参数 子组件发布update:xxx 通知父组件数据更新       推荐使用
    - props.list.push(newMsg.value) //子组件中修改父组件的值 可行但不建议
    - 父组件通过ref获取子组件的DOM结构 从而获取到子组件暴露出来的数据defineExpose({list}) 但是不推荐 demo5
