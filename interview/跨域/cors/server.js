const http = require('http')

http.createServer(function(req,res){
    // 开启cors
    // 设置响应头
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*' ,//所有//也可以 'http://localhost:5500',
        'Access-Control-Allow-Methods':'GET','POST'
        
    })
    res.end('hello world')
}).listen(3000)
