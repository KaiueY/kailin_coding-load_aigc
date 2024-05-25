#豆瓣电影
    to ai思维
https://movie.douban.com/chart
## 爬虫问题

-url 浏览器？ common
   程序思维：发出http请求 html 字符串
   获取响应，解析响应，保存数据
-对字符串做查找正则
    伪代码
    -聚焦 .artcle movies 列表 其他的可以丢弃
    -table 列表 电影列表
    -title pic。。。。
-电影列表
   JSON数组
   [

    {
        name:'破墓'，
        pic:'',
        desc:'',
        score:'',
    },
   ]
    
## 编程素养 
    -本质和解决方案 http请求 
    -按代码顺序，细分 ->语句（语言、语法）
        伪代码
    - 调试并返回结果
    - npm init -y初始化项目
    - npm install x-crawl 爬虫模块
    - node main.mjs
## AIGC素养
    有哪些编程模块可以被替代？50%的变成流程不需要了
    ### 现在可以基于LLM 大模型编程（全网的知识）
    - ChatGPT ？  以前我们主要对话
       openai AIGC 自然语言处理
    - 一些coding 编程流程工作 http请求
    - html字符串响应后，AIGC 生成式 比传统流程牛逼多了
    - 电影的对象组织
        详细、清晰的表达我们需求 交给LLM（大模型）
        封装，就是 编写Prompt  AI代码
        - 有一段movie html “喂数据”
        - 告诉LLM 他是什么
        - 标题、图片。。。
        - 返回
## 大模型优先
   - LLM大模型优先
        -擅长自然语言处理 NLP机器学习 
        - 生成式的文字、图片、视频等任务，交给AIGC
        -open ai  通义千问等sdk 提供接口
   - 基于冯诺依曼，非AIGC任务，交给传统编程流程
   AIGC 全栈 = 编程 +AIGC（Prompt Enginnering）
   驱动LLM工作的核心 就是给他一段合适的提示词（Prompt
