const router = require('@koa/router')()
const { typeFind, idFind,insertNote } = require('../controllers/index.js')
const jwt = require('../utils/jwt.js')
const { formateTime} = require('../utils/formatetime.js')


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
    const { title, note_content, head_img, note_type } = ctx.request.body
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
        // console.log(result);
        ctx.body = {
            code: '800',
            data: result,
            msg: '发布成功！🎉'
        }
    } catch (error) {
        ctx.body = {
            code: '806',
            data: error,
            msg: '服务器异常！😮'
        }
    }
})

module.exports = router
