const router = require('@koa/router')()
const { userLogin,userFind,userRegister } = require('../controllers/index.js')
const jwt = require('../utilt/jwt.js')
router.prefix('/user')

// 登录接口
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
                username: result[0].username,
            }
            // 生成token 
            const token = jwt.sign(data)
            ctx.body = {
                code: '800',
                data,
                msg: '登录成功！😄',
                token: token
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


// 注册接口
router.post('/register', async (ctx) => {
    const { username, password, nickname } = ctx.request.body
   
        if (!username||!password||!nickname) {
            ctx.body = {
                code:'801',
                msg:'账号密码或昵称不能为空'
            }
            return 
        }
          try {
        // 判断账号是否存在
        const findRes = await userFind(username)
        if(findRes.length){//账号已存在
            ctx.body = {
                code:'802',
                data:'error',
                msg:'账号已存在'
            }
            return
        }
        // 允许注册
        const res = await userRegister({username,password,nickname})
        console.log(res);
        if(res.affectedRows){
            ctx.body = {
            code:'800',
            data:'success',
            msg:'注册成功'
        }
        }else {
            ctx.body = {
                code:'900',
                data:'fail',
                msg:'注册失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code:'901',
            data:'success',
            msg:'服务器异常'
        }
    }
})


module.exports = router