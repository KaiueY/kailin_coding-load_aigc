const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url == '/home'){
        res.writeHead(200,{'content-type':'apllication/json'})
        res.end('<h1 Hello World/>')
    }
    res.end('NOT FOUND')
})

server.listen(3000,()=>{
    console.log('server is running at 3000');
})
