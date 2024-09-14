/**
 * index.ts
 */

// app 中间件的挂载 
import express from 'express' // koa 
import  cors from 'cors'
import { ALLOW_ORIGIN } from './app.config'
import postRouter from '../post/post.router' // 文章路由模块
import { defaultErrorHandler } from './app.middleware'
/**
 * 创建项目
 */
const app = express()

app.use(
    cors({
        origin: ALLOW_ORIGIN, // 白名单
        exposedHeaders: 'X-Total-Count' // 总计数量
    })
)

/**
 * 路由
 */
app.use(
    postRouter
)

/**
 * 错误处理中间件
 */
app.use(defaultErrorHandler)

/**
 * 导出应用
 */
export default app
