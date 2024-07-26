const router = require('@koa/router')()
const { userLogin } = require('../controllers/index.js')
router.prefix('/user')

router.post('/login', async (ctx) => {
    // 从请求体中解析到前端传递的参数 去数据库查询账号密码是否正确合法 
    // console.log(ctx.request.body);
    const { username, password } = ctx.request.body
    try {
        const result = await userLogin(username, password)
        // console.log(result);
        if (result.length) {//存在
            const data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username
            }
            ctx.body = {
                code: '800',
                data,
                msg: '登录成功！😄'
            }
        } else {//不存在数据
            ctx.body = {
                code: '805',
                msg: '账号或密码错误！😭',
                data: 'error'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常！😮'
        }
    }
})


module.exports = router