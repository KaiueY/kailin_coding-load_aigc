# 组件定制

- 定制一个Rate组件 
- 显示评分 星星
- 颜色主题定制
    - props(defineProps+computed (计算属性))
- 动态打分

- 父子通信
    - 组件间通信的原则，数据状态及修改归父组件管理 通过props 和自定义事件传递给子组件  子组件不可以
      修改 通过自定义事件传递给父组件 {emits} emits:发出    发出一个请求 emits {自定义事件，参数}
    - 父组件声明自定义的事件    
        @update-rate="onRate" 自定义事件的名字  函数体
    - 子组件
        - defineEmits 首先要引入 defineEmits
        - const emits = defineEmits(['update-rate'])  定义一个事件
        - emits('update-rate',2)  触发事件
        - 通过props接收父组件传递的数据
- 打星业务的实现
    - 组件的私有状态 width 初始值为 props.value  mouseout时  恢复到 props.value 状态驱动界面  交互分数  还有宽度
    - 定位 
        把实星定位到空星上面 
        数据值满足条件的时候 显示实星
        空星可以进行交互 通过鼠标事件来控制
        每颗星星 @mouseover @mouseout @click
    - 创意
    - 