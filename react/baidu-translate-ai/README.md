# Transformers.js 前端AI库

    - transformer.js 前端AI库
        全球最大的Ai社区 huggingFace(LLM 开源社区 )


    - AI是技术趋势
    - AIGC 现场已经很成熟 生成代码 快速学习
    - coze agent 开发  也调用过接口来完成项目中的AI应用🩷
    - 了解OpenAI 等LLM接口  完成过文生图 语义搜索等
    - AI带来了全新的开发体验 前端工程师需要实施Ai应用用户体验
        - prompt engineer
            - 给他一个角色 role 
            - 描述需求
            - 分步也许会好一点 能够更好的完成任务
            - 给LLM一些时间 制定一些规则
            - 
        - button disabled 给点时间 不要频繁请求

    - AI 端模型能力是一个风口 我了解transform.js
    - 
    - 如何回答关于 react 学的怎么样
        了解语法 写过一个AI项目 一周内能上手
        - react 组件？
            - 返回JSX的函数就是组件 react 是.jsx文件
            - vue: template/script/css 三段式写法 .vue文件    
            - 函数就是对象
            - React(函数式组件)/Vue 函数式编程setup
            - 数据绑定不用v-module 认为性能不好 单向数据流
                vue 使用 v-model

        - MVVM(函数) + 组件化思想 + 函数式编程 + 
            - vue 的优势是API 简洁好上手
                setup语法糖 ref reactive defineProps  
            - 

            - react 优势是纯JS风格 直接用函数的参数解构就是Props  map 上手有点难度

        - react 使用<></> 
            做容器  但是没有添加节点 （当然也可以用div 但会分层）
            文档碎片组件 Fragmaent 
        - react 的 hook 函数
            react 在hook 上很激进  借鉴了hook思想 
            - useState 引入响应式的状态 类似于vue中的ref
                参数是默认值 返回的是一个数组 第一个是转台本身 第二个是更新状态的函数
            - useRef 
                在vue中 ref是动态绑定节点/对象 
                react中  useRef null - > current
                要快速显示组件优先 所以web worker 的实例化推迟 useRef动态绑定worker对象
                - worker 组件函数内局部变量 null 访问问题 
                - useEffect 实例化  解决了性能问题
                - 任何地方都可以访问
                - 卸载时需要回收这个对象
            - useEffect
                生命周期钩子函数
                    - onMounted
                    - onUnmounted return ()=>{卸载功能}
        - 数据通信 
            - 状态管理 pinia redux
            - 父子组建通信 
        - html5 功能
            - 拖拽
            - form 表单新特性
            - 语义化标签
            - canvas audio
            - 本地存储 localStorage 
            - web socket
            - html5 file 
            - web worker 多线程
            - LBS 附近的位置
            - webGL three.js 3D 小米汽车
            - 
            - 
        - web worker
            - JS因复杂任务启动worker 线程 
            - 线程优化  压缩 加密 AI……
            - 实例化 new Worker(new URL('./worker.js'),{type:'module'})
            - 消息机制完成  主线程和worker 线程间通信
                事件监听
                postMessage()
        - transformers.js
            - import from  从cdn 加载 nlp js库
            - 核心模型是pipeline ('sentiment-analysis') pipe()功能函数
                - 下载大模型 
                - pipeline(task,model,options)
                - 放在worker线程 单例模式实例化 下载大模型等文件
                - 调用options progres_callback 实时反馈下载进度
                - webworker postMessage 消息机制 通知主线程
            - pipe(text) 拿到结果
            - 



# 百度翻译
    - NLP 翻译任务 机器学习 
    - 数据驱动界面
        源语言 英文
        结果语言 中文
        待翻译文本 
        翻译结果
- es6+ 介绍 2015年开始
    - 阮一峰 老师的es6手册
    - 代码简洁
        空值合并运算符 ?? 
            在开发AI项目的Progress组件时  用到了进度条 percentages
            传值的过程中 使用了?? 来替代三元运算符  
            percentage = percentage ?? 0
    - 大型项目
        class extend
    - 使用了 es6 class 封装了 MyTranslationPipeline类
