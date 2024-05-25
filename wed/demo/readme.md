## Key 安全问题
-如何妥善处理api-key？

- env 
    环境变量对象，包含所有的环境变量，
    dotenv().config() 会读取根目录下.env  如：key=val格式
    添加到env 中  可以在代码中读取到env 对象
    process.env   process-进程对象 是一个全局对象 代表进程 
    进程 分配资源的最小单元
    线程 进程的小弟 执行的最小单元

    操作系统 （Windows/Mac/linux）<- 进程（process）<- 环境变量（env）<- 项目（project）
## prompt设计模式
    把时间花在设计Prompt上
    -提供清晰、明确的提示
        - 长提示效果更好
        - 给它一些例子 few shot 展示LLm的学习能力

## Don't repeat yourself Dry
    -封装
