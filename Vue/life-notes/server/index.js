const Koa = require('koa')
const app =new Koa()
const cors = require('@koa/cors')
const {bodyParser} = require('@koa/bodyparser')
const useRouter = require('./routes/index.js')

app.use(cors())//允许跨域
app.use(bodyParser())//让koa可以解析post传递的参数 
// 生效路由
useRouter(app)

app.listen(3001,() =>{
    console.log('项目已启动');
})