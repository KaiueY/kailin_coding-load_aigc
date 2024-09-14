import mysql from 'mysql2' //数据库驱动
import {
    MYSQL_DATABASE,
    MYSQL_HOST,
    MYSQL_PASSWORD,
    MYSQL_PORT,
    MYSQL_USER,
}from '../../app/app.config'

/**
 * 创建数据库连接
 */
export const connection = mysql.createConnection({
    host:MYSQL_HOST,
    // port:+MYSQL_PORT,
    port:parseInt(MYSQL_PORT,10),
    database:MYSQL_DATABASE,
    user:MYSQL_USER,
    password:MYSQL_PASSWORD,
    
})