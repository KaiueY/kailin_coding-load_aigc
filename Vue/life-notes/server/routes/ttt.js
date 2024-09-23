const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        // 解决跨域问题
         'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
            'Access-Control-Allow-Credentials': 'true'

    });
    if(req.url === '/upload'){
        
        req.on('data', (data) => {
            console.log(data);
        });
    }
});

server.listen(3002, () => {
    console.log('服务器已启动');
}
)