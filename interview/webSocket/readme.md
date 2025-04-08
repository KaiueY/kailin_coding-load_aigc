## http 和 webSocket 区别
    - http是无状态的 （不管多少次请求都是独立的，只要有url，返回都是一致的 可以带上cookie，Authorization 身份验证）
    - webSocket是有状态的 （只要连接上，就可以一直保持连接 一旦链接，就会分配一个id）
    - http是单向的 （客户端只能发送请求，服务端只能返回响应）
    - webSocket是双向的 （客户端和服务端都可以发送请求和响应）
    - 后端通过send方法发送消息 前端通过onmessage方法接收消息
 - webSocket 服务搭建流程
 