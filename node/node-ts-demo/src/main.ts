/**
 * main.ts
 */

// 入口文件 功能模块化
// app实例 中间件 模块化

import app from './app'
// 配置文件 .env
import {APP_PORT,MYSQL_DATABASE} from './app/app.config'
import {connection} from './app/database/mysql'

app.listen(APP_PORT, () => {
    console.log(`服务端已启用，监听端口 ${APP_PORT}`);
})

/**
 * 连接数据库
 */

connection.connect(error =>{
    if(error) {
        console.log('数据库连接失败',error.message)
    }else{
        console.log('数据库连接成功!')
    }
    
})