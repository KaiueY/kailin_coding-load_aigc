# v3 后台管理系统

- 实习项目 外包必备
    - 后台出了问题 不是大事

    - 项目都有个后台

- VUE 组件库 ElementPlus
    - main.js 中use ElementPlus 和加载css
    - 但是这样太大了 加载有点慢
    
    - 按需加载 一个个导入  一个个use


- 路由
    - 放心使用history 不用关心 hash的兼容性
    - 路由守卫 
        - 权限控制
        - 身份权限 admin user
- 五星路由功能
    - 两种路由形式的优缺点
        - hash
            - 兼容性好
            - 丑
        - history
            - 美观
            - 兼容性差
        结合项目分析 后台系统 自己人用history
        用户项目 如果要考虑兼容性 用hash 用户端移动项目不太需要兼容性
        用histroy也行
        hash（用户端+PC端）
    - 路由的懒加载
    - 二级路由 
    - 路由守卫
        - 登录鉴权 auth
        - 权限鉴权 role
    - 404  403
    -meta
        - title document.title
        - icon   favicon
        - permiss 权限
        - auth  
    - NProgress 进度条
      用户体验很好
        router.beforeEach
        router.afterEach
    - history模式
        访问历史记录
            router-link 点击
            useRouter push go(-1)
            window.history.back()
            window.history.forward()
            window.history.go(-1)

- ElForm 的用法
    - ElementPlus UI组件库中的form组件
    - ElForm ElFormItem ElInput ElButton
    -v-model的双向绑定 reactive {username,password,...}
        -ElForm :model="param"
    - validate rules 配置一下
        - 对form 进行ref绑定 , 绑定的是Form组件
        - 在提交之前 验证一下 form对象有validate方法

- pinia 
    - 状态管理
    - 比vuex更好用
    - 使用
        导入：import  {createPinia} from 'pinia'
        使用：app.use(createPinia())

- 全局状态设计
    - collapse 状态： true|false
        - 窄屏的pad
        - 通过v-if v-else +action 控制collapse状态
    - permiss 权限状态
        - 跨组建层级访问是常态
        - key, defaultList
        - defaultList 可用于计算 login.vue ms_name this.handle_set key,
        - router.js 会重新执行  403用到 校验权限
        - 任何地方需要校验权限 

- Object.entries 的用法和应用场景
    - es6 新增的遍历对象方法
    - Object.keys() Object.values() 基础上，将key value 作为一个数组的1,2项返回二维数组
    - app.component 全局声明组建的时候 一次性把ElementPlus/icons 全部注册
    

- css 特性
    - transition
    - css4 variable 主题切换
         ：root{--}
         var()

- ElDropDown
    - 触发DropDown的内容 交给slot
    - 那么DropDown的内容呢？  可以交给具名插槽
    - slot带来了组件超级定制性
    - el- Dialog 也是这样的 
    - template vue 内置组件 包裹一下内容的部分  挂载到页面上就消失

- template 的用法
    - vue 组建的模板声明
    - template #title 具名slot 插入到相应位置
    