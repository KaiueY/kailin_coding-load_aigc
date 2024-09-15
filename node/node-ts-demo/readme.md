# 全栈能力
    - express 框架
    - typescript 
    - MVC Model View Control
    - mysql 
    - 复杂业务 
- 任何一个项目都是blog项目
    CRUD sql太简单 大项目是一个复杂sql
    
- ts 和node 结合
    - tsc-watch 监听文件改动 编译ts dist/main.js
    - "@types/node" node类型声明文件 独立的包  node本身并不包含类型声明文件
    - typescript 转义的核心文件
    - tsconfig.json
        common.js target
        前端载体是用户  后端是服务器
- 功能模块
    - 配置模块
        使用了dotenv
    - app 模块 应用和中间件
    - 路由模块
        - 后端的功能模块
    - 有多少张表 mysql 关系型数据库
        - post 主表 存放关键字段 
            - comment 评论表
            - file 文件表 文章附件
            - post_tag tag表
            - tag  标签表
            - user_like_post 用户点赞表
        - user 主表
            UNIQUE KEY
            - avatar  副表
        - router -> controller 路由交给控制器 （数据）
            - restful Method + url 定位资源
                /posts/:postId
            - 交给控制器 controller
                - 取到参数
                - 校验参数
                - 业务逻辑
        - controller -> service（sql执行）
        - 用try catch 包住  connection.promise().query()
            - next(error) 错误并非不可原谅的 为了用户的正常浏览 抛向错误处理模块
        - 错误处理中间件
            app.middleware 第一个参数是error 对象 
        - 功能模块的业务划分
            - post.router.ts 路由模块 restful 定义路由 再交给下面
            - post.controller.ts 控制器 解析参数 POST (GET都可以)  校验参数 业务逻辑
            - post.service.ts SQL业务逻辑  mysql2提供的方法如（.promise.query）进行复杂查询
        
        - 表链接
            - inner join
            - left join
            - right join
                posts表  n   :    1  user表
            根据 postId 查询        user
                
    - 索引 
        - 主键
        - 关键
        - 普通索引
        - 联合索引
        - 唯一索引
- 良好的编程风格
    - 模块化 入口文件干净 不同文件负责不同的事
    - 注释
    - git提交规范
    - hooks 函数式编程
    - 面向对象 OOP 单例模式
    - 