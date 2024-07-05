# 路由
    模拟当url发生变化时，如何根据不同的url渲染不同的组件，实现成多页的效果

# 路由提供的两个组件
    - router-link: 相当于a标签，用于跳转
        - 由a标签封装而来 herf属性变成了to属性 
        
        - to: 跳转的路径

    - router-view: 用于展示匹配到的组件

# 路由跳转
    - 通过router-link组件的to属性进行跳转
    - 通过编程式导航进行跳转
        - this.$router.push('路径')
        - this.$router.replace('路径')
        - this.$router.go(1) // 前进一步
        - this.$router.go(-1) // 后退一步

# 参数
    通过useRoute()得到当前url的详细信息来获取
    
    传递： router.push({path: '路径', query: {参数: 值}})
    接收： this.$route.query.参数

    传递:  router.push({name:'hot',patams:{参数: 值}})
    接收： router.params.参数
    
        <!-- 这种需要设置 props: true -->
        ： const props = defineProps({// 获取参数
            参数: String
        }) 
       