# 存储
cookies     localStorage    sessionStorage       indexDB                    
服务端设置     一直存在        页面关闭就消失       一直存在
   4k          5M左右         5M左右              无限制
自动携带在http请求头中   其余不参与
默认不可以跨域  可以实现跨域   不可以跨域          默认不支持跨域， 
但可以设置
## cookies 
    1. value cookie 加密厚的用户标识
    2. http-only 无法通过js访问
    3. secure 只有https才能发送
    4. same-site 限制第三方cookie
    5. expires 过期时间

# 缓存
- 强缓存
    1. cache-control : max-age=xxx 秒
    2.
通过浏览器地址栏输入地址访问页面时，请求头内默认会带有Cache-Control: max-age=0，这是为了确保每次都是最新的资源。
- 协商缓存
    1. 后端设置响应头: 'Last-Modified' :'资源最后修改时间',浏览器会在下一次请求该资源时在请求头中默认携带 if-modified-since:'资源最后修改时间' ,后端通过对比请求头中默认携带的时间戳和资源最后修改时间来判断是否有更新，如果没有更新则指向浏览器返回304，驱使浏览器复用上一次的缓存。
    2. 后端设置响应头,'etag':'资源的唯一标识',浏览器会在下一次请求该资源时在请求头中默认携带 if-none-match:'资源的唯一标识',后端通过对比请求头中默认携带的唯一标识和资源的唯一标识来判断是否有更新，如果没有更新则指向浏览器返回304，驱使浏览器复用上一次的缓存。