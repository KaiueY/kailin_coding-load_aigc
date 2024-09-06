import { computed, inject, reactive } from "vue"
const STORE_KEY = '__store__'//

export const useStore = () =>{
    return inject(STORE_KEY)
}
export const createStore =(options) =>{
    return new Store(options)
}

class Store{
    constructor(options){
        // 把options的东西 getters等 转换为当前对象的方法 this加载 state和getters需要是响应式的
        // 响应式
        // 面向对象的属性
        this.$options = options//保存
        // 私有属性
        this._state = reactive({
            data:options.state()
        }) 

        // 私有属性 commit dispath 
        this._mutations = options.mutations
        this._actions = options.actions
        this.getters = {}

        Object.keys(options,this.getters).forEach(name=>{
            const fn = options.getters[name]//计算函数
            this.getters[name] = computed(()=>fn(this.state))
        })
    }

    get state(){
        return this._state.data 
    } 
    // payload参数
    // 确保this指向store对象
    commit = (type ,payload)=>{
        const entry = this._mutations[type]
        entry&& entry(this.state,payload)
    }
    // 动作类型  action_name
    dispatch(type,payload ){
        const entry = this._actions[type]
        entry && entry(this,payload)
    }

    install(app){
        app.provide(STORE_KEY,this)
    }
}  