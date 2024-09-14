
/**
 * main.ts
 */

// 入口文件 功能模块化
// app实例 中间件 模块化

import app from './app'
// 配置文件 .env
import {APP_PORT} from './app/app.config'

app.listen(APP_PORT, () => {
    console.log(`服务端已启用，监听端口 ${APP_PORT}`);
})