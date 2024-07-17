# vuex 带来了数据流管理

- 小项目不需要用到vuex/pinia 但是大项目需要用到 vuex 管理好数据

- 专业打理数据 
- 把数据放到vuex中 收归一处
     - 数据归于一处 需要向其申请数据 

- npm i vuex
   插件  也需要install-> use 

- 读取一个状态很简单
     useStore
     computed store.state.count
- 写状态
     store.dispatch('increment') dispatch一个action
     action执行一下 最后一定会commit一个mutation(action可以直接解构) 提交修改
     mutation 修改状态
     state.count++ 值发生改变 所有用到它的地方都会更新
     
