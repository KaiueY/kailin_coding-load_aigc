import {createStore } from 'vuex' // 引入vuex只有一个store

// 全局状态
// 放在中央的好处 任何组件都可以访问 父子或者兄弟组件之间不需要通过props传递数据
// 状态对象
const state = {
    count: 0, // 计数器
    user:null
}
// 修改  需要按流程 
const actions ={
    increment:({commit})=>{
        commit('increment')
    },
}
// 所有的状态修改都要经过mutations
// 只有mutations才能修改state
const mutations ={
    increment(state){
        state.count++
        console.log('???');
    }
}
// 除了读操作 对写操作非常严格
const store  = createStore({
    state,
    actions,
    mutations,
})
export default store