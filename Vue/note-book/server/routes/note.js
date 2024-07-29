const router = require('@koa/router')()
const { typeFind } = require('../controllers/index.js')
const jwt = require('../utils/jwt.js')


router.get('/findNoteListByType',jwt.verify(),async (ctx,next)=>{
    const {noteType} = ctx.query
    // console.log(noteType);
        // console.log(result);
        try {
             const result = await typeFind(noteType,ctx.userid)
            //  console.log(result);
             if(result.length){
                ctx.body={
                    code:'800',
                    data:result,
                    msg:'success'
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
                code: '8006',
                data: error,
                msg: '服务器异常！😮'
            }
        }
})


module.exports =  router
