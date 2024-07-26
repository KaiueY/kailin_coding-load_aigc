const Koa = require('koa')
const app =new Koa()
const cors = require('@koa/cors')
const {bodyParser} = require('@koa/bodyparser')
const userRouter = require('./routes/user')

app.use(cors())//允许跨域
app.use(bodyParser())//让koa可以解析post传递的参数 
app.use(userRouter.routes(),userRouter.allowedMethods())

app.listen(3000,() =>{
    console.log('项目已启动');
})