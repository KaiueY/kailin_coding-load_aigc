const http = require('http');
const url = require('url')


const responsData = {
    name: '张三',
    age: 18,
    time: '2021/8/10'
}
function toHtml(data) {
    return `
    <div>
        <h1>姓名:${data.name}</h1>
        <h1>年龄:${data.age}</h1>
        <h1>时间:${data.time}</h1>
    </div>
    `
}
const server = http.createServer((req, res) => {
    // console.log('req:---',req);
    // console.log('res:---',res);
    const { pathname } = url.parse(`http://${req.headers.host}${req.url}`)
    if (pathname === '/') {
        const accept = req.headers.accept
        if (req.method ==='POST'||accept.includes('text/html')) {

            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            })
            res.end(toHtml(responsData))
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json;charset=utf-8'
            })
            res.end(JSON.stringify(responsData))

        }
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html;charset=utf-8'

        })
        res.end('<h1>ERROR:404 Not Found</h1>')
    }
    // console.log(path);
    // console.log(req .url,'----');


})
server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})