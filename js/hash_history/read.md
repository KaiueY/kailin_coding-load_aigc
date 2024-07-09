# hash router

- http协议是无状态的，服务器端是不可以主动向浏览器推送内容。
- 如果需要请求新的资源，/ -> .page2 浏览器会重新发送请求到服务器，服务器返回新的资源。
- 服务器又返回所有的html、css、js等资源，浏览器重新渲染页面。

- 当使用Router 单页应用（SPA Single Page Application）带来的全新用户体验
    优点：加载快 不会白屏 页面快一点显示是第一要义
    - url 发生改变 浏览器地址改变 但是不能去重新刷新页面  #/page2 加上#号 但是不会重新刷新页面 
    - 因为他是一个锚链接，浏览器不会重新刷新页面，只会改变url
    - 提供hashChange事件监听hash的改变 利用ajax请求修改DOM 将ruter-view的内容替换掉 -> views/Component

- 既不能跳页面 又要动态更新界面 SPA -> 和手机app差不多


- handler.call(this) // 保证this指向当前对象
    可以在处理函数拿到路由对象等