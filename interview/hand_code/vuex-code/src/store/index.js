import {createStore} from './gvuex.js' //手写返回的单一状态树



const store = createStore({
    
    // 全局状态
    state(){
        return {
            count:1
        }
    },
    getters:{
        double(state){
            return  state.count * 2
        }
    },
    mutations:{
        add(state){
            state.count++
        }
    },
    actions:{
        asyncAdd({commit , }){
            setTimeout(()=>{
                commit('add')
            },2000)
        }
    }
}) 


export default store