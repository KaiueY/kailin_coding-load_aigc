# 域名 


# IP
- DNS解析  - 获取IP地址
    https://server.51cto.com/article/704508.html
    1. 到本地域名服务器 查找域名对应的IP
    2. 到根域名潮朝域名对应的ip
    3. com 顶级域名服务器查找域名对应的ip
    4. 目标服务器查找域名对应的ip
    5. 将ip写入DNS缓存

两台电脑需要通信 就需要知道各自的ip地址 就需要TCP协议（网络传输标准）
# TCP协议
 - 三次握手 -- 为了建立连接
    1. 客户端向服务端发送建立连接请求 客户端进入SYN-SENT状态
    2. 服务端向客户端发送同意链接的应答， 服务端进入SYN-RECEIVED状态
    3. 客户端接受到服务端的同意链接的应答后，再向服务端发送一个确认收到的应答，客户端进入ESTABLISHED状态 服务端也进入ESTABLISHED状态
 
 - 为什么一定要三次握手？ 2次行不行
 当客户端向服务端发送一个建立连接请求a，因为网络原因，这个连接请求丢失了，那么TCP协议会采用重传机制，再次发送一个建立连接请求b，当b成功到达服务端并成功响应，开始数据通信，结束后，双方都关闭，如果a又到达了服务端，服务端又会认为又有新的连接请求，进而导致服务端返回一个应答进入到连接状态，而客户端此时已经关闭，造成了性能浪费。三次握手呢，当服务端接收到连接请求并且返回应答，进入待连接状态，如果一定时间内客户端返回了一个应答，则进行连接，数据通信，一定时间内，若未收到客户端的接受应答，则关闭请求。
    
 - 数据传输

 - 四次挥手 断开连接 释放连接
    1. 客户端想服务端发送断开连接请求
    2. 服务端接收到客户端的断开连接请求，返回一个统一断开的响应，进入到CLOSE_WAIT状态
    3. 此时服务端可以向客户端发送未发送完的数据，客户端不能向服务端发送请求，进入LAST_ACK状态 
    4. 客户端接受到服务端的应答，客户端进入CLOSE_WAIT状态持续2MSL 并向服务端发送确认应答，进入CLOSE状态 服务端在接收到客户端的确认应答后也进入CLOSE状态。
  