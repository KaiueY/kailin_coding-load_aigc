const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    if(req.url === '/'){
        let content = fs.readFileSync('./index.html', {encoding: 'utf8'});
        console.log(content);
        res.end(content);
    } else {
        // 处理其他URL或返回404等
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
}).listen(3000);