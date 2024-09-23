const router = require('@koa/router')()
const { typeFind, idFind,insertNote } = require('../controllers/index.js')
const jwt = require('../utils/jwt.js')
const fs = require('fs');
const { formateTime} = require('../utils/formatetime.js')

let chunksData = {}; // 用来暂存每个文件的分片
let head_img = null

router.get('/findNoteListByType', jwt.verify(), async (ctx, next) => {
    const { noteType } = ctx.query
    // console.log(noteType);
    // console.log(result);
    try {
        const result = await typeFind(noteType, ctx.userid)
        //  console.log(result);
        if (result.length) {
            ctx.body = {
                code: '800',
                data: result,
                msg: 'success'
            }
        }
        else {//不存在数据
            ctx.body = {
                code: '805',
                msg: '，没有此类数据！😭',
                data: 'error'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '806',
            data: error,
            msg: '服务器异常！😮'
        }
    }
})

// 根据id查找数据
router.get('/findNoteDetail', jwt.verify(), async (ctx, next) => {
    const { id } = ctx.query

    try {
        const result = await idFind(id)
        //  console.log(result);
        if (result.length) {
            ctx.body = {
                code: '800',
                data: result,
                msg: 'success'
            }
        }
        else {//不存在数据
            ctx.body = {
                code: '805',
                msg: '，没有这个数据！😭',
                data: 'error'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '806',
            data: error,
            msg: '服务器异常！😮'
        }
    }
})



// 插入数据
router.post('/note-publish', jwt.verify(), async (ctx, next) => {
    const { title, note_content,  note_type } = ctx.request.body
    const c_time= formateTime(new Date())
    const m_time= formateTime(new Date())


    try {
        const result = await insertNote({
            title,
            note_content,
            c_time,
            m_time,
            head_img,
            note_type,
            userid: ctx.userid,
            nickname:ctx.nickname
        })
        if(result.affectedRows){
            ctx.body = {
            code: '800',
            data: 'success',
            msg: '发布成功！🎉'
        }

        }
        else{
            ctx.body = {
                code: '801',
                data: 'filed',
                msg: '发布失败！🎉'
            }
        }
        // console.log(result);
        
    } catch (error) {
        ctx.body = {
            code: '806',
            data: error,
            msg: '服务器异常！😮'
        }
    }
})


// 分片上传接口
// 上传分片接口
router.post('/upload-chunk',async (ctx) => {
    try {

        const { file } = ctx.request.files.file;
        console.log(file,'file ---');
        
        const { chunkIndex, fileName, chunkCount } = ctx.request.body;

        if (!file) {
            ctx.throw(400, 'File not found');
        }

        const chunkBuffer = fs.readFileSync(file.path);
        const chunkBase64 = chunkBuffer.toString('base64');

        // 初始化 chunksData 对象
        if (!chunksData[fileName]) {
            chunksData[fileName] = new Array(chunkCount);
        }

        // 保存分片
        chunksData[fileName][chunkIndex] = chunkBase64;

        // 删除临时文件
        fs.unlinkSync(file.path);

        ctx.body = { code: '200', msg: 'Chunk uploaded successfully' };
    } catch (error) {
        console.error('Upload chunk error:', error);
        ctx.throw(500, 'Internal Server Error');
    }
});

// 合并分片接口
router.post('/merge-chunks', async (ctx) => {
    try {
        const { fileName } = ctx.request.body;

        if (!chunksData[fileName]) {
            ctx.throw(400, 'No chunks found for this file');
        }

        // 合并所有分片为一个 Base64 字符串
        const mergedData = chunksData[fileName].join('');
        delete chunksData[fileName]; // 清除已处理的分片数据

        ctx.body = { code: '200', data: mergedData, msg: 'Upload successful!' };
    } catch (error) {
        console.error('Merge chunks error:', error);
        ctx.throw(500, 'Internal Server Error');
    }
});
  

module.exports = router
