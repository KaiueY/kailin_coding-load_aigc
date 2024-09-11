const http = require('http')
const path = require('path')
const url = require('url')
const fse = require('fs-extra')
const multiparty = require('multiparty');

// 存放前端发来的切片
const UPLOAD_DIR = path.resolve(__dirname, ".", "splice")
// 解析post参数
function reslovePost(req) {
    return new Promise((reslove, reject) => {
        req.on('data', data => {
            // console.log('data:',JSON.parse(data.toString()));
            reslove(JSON.parse(data.toString()))

        })
    }
    )
}

// 合并函数
function pipeStream(path,writeString){
    return new Promise((reslove,reject)=>{
        const readStream = fse.createReadStream(path)
        readStream.on('end',()=>{
            fse.removeSync(path)//删除已读取切片
            reslove()
        })
        readStream.pipe(writeString)
    })
}

// 合并切片
async function mergeFileChunk(filePath, fileName, size) {
    // 拿到所有的切片
    const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)
    const chunkList = await fse.readdir(chunkDir)
    // console.log('chunkList:', chunkList);
    chunkList.sort((a, b) => a.split('-')[1] - b.split('-')[1])
    const result = 
    chunkList.map((chunkName, index) => {
        const chunkPath = path.resolve(chunkDir, chunkName)
        // console.log('chunkPath:',chunkPath);
        // 同步读取文件
        pipeStream(chunkPath, fse.createWriteStream(filePath,{
            start: index*size,
            end: (index+1)*size-1 
        })
        )
    })

    await  Promise.all(result)
    // 删除切片文件夹
    fse.removeSync(chunkDir)
    return true

    
}

const server = http.createServer(async (req, res) => {
    // 解决跨域  
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'access-control-allow-headers': '*',
        'Access-Control-Allow-Methods': '*'
    })

    // 请求预检
    if (req.method === 'OPTIONS') {
        res.status = 200
        res.end()
        return
    }


    if (req.url === '/upload') {
        // 接受前端传来的formData
        // 得到buffer流 怎么解析呢 不知道
        // req.on('data',(data)=>{
        //     console.log(data);

        // })

        const form = new multiparty.Form()
        form.parse(req, (err, fields, files) => {
            // console.log('fields:',fields);//切片的名称一些描述
            // console.log('files:',files);//切片的二进制流被处理成对象
            const [file] = files.file
            const [fileName] = fields.fileName
            const [chunkName] = fields.chunkName
            console.log('chunkName', chunkName);

            // 保存切片
            const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)
            // 判断是否存在该文件夹 没有则创建
            if (!fse.existsSync(chunkDir)) {
                fse.mkdirSync(chunkDir)
            }
            // 存入

            fse.moveSync(file.path,`${chunkDir}/${chunkName}`)
            res.end(JSON.stringify(
                {
                    code: 0,
                    massage: '保存成功!'
                }
            ))
        })
    }

    // 解析post参数
    if (req.url === '/merge') {
        const { fileName, size } = await reslovePost(req)
        const filePath = path.resolve(UPLOAD_DIR, fileName)
        // console.log('filePath:',filePath);//完整文件路径
        // 合并切片
        const result = await mergeFileChunk(filePath, fileName, size)
        // console.log('result:', result);
        if(result){
            res.end(JSON.stringify(
                {
                    code: 0,
                    massage: '合并成功!'
                }
            ))
        }
        

    }
})
server.listen(3000, () => {
    console.log('server is running at 3000')
})
