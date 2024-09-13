const http = require('http');
const path = require('path')
const fs = require('fs')
const mime = require('mime')

const server = http.createServer((req, res) => {
    let filePath = path.resolve(__dirname, path.join('www', req.url))
    // console.log(filePath);
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)//获取路径对应的资源
        const isDir = stats.isDirectory()//是否是文件夹
        const { ext } = path.parse(filePath)


        if (isDir) {
            filePath = path.resolve(filePath, 'index.html')

        }

        // 获取if-modified-since请求头
        const timeStamp = req.headers['if-modified-since']
        let status = 200
        if(timeStamp && Number(timeStamp) === stats.mtimeMs){
            status = 304

        }

        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath) //读取文件内容
            // console.log('content:---',content);
            res.writeHead(status, {
                'Content-Type': `${mime.getType(ext)}`,//设置响应头
                'cache-control': 'max-age=10',//设置缓存时间
                'last-modified': stats.mtimeMs,//设置最后修改时间 签名
                // 'etag':`由文件内容生成的hash值`//设置文件指纹
                
            })
            res.end(status==200?content:null)

        }
    }

})
server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})