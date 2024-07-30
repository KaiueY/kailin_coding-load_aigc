// 打造一个可以链接数据库的方法
const { database } = require('../config/index.js')
const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: database.HOST,
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    port: database.PORT,
})

// 打造一个方法可以连接数据库
const allServices = {
    async query(sql) {
        try {
            // 通过连接池来创建连接
            const conn = await pool.getConnection()
            //对该连接执行操作 SQL语句
            const [rows, err] = await conn.query(sql)
            //  rows 是成功后的返回  err是失败后的返回

            // 释放连接
            pool.releaseConnection(conn)

            return Promise.resolve(rows)
        } catch (err) {
            return Promise.reject(err)
        }
    }
}
const userLogin = (username, password) => {
    const _sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
    return allServices.query(_sql)
}

// 查找账号
const userFind = (username) => {
    const sql = `SELECT * FROM users WHERE username = '${username}'`
    return allServices.query(sql)
}

// 注册写入数据
const userRegister = (values) => {
    const _sql = `INSERT INTO users (username, password, nickname) values ('${values.username}', '${values.password}', '${values.nickname}')`
    return allServices.query(_sql)
}

// 查找notetype
const typeFind = (noteType, id) => {
    const sql = `SELECT * FROM note WHERE note_type = '${noteType}' and userId = '${id}'`;
    return allServices.query(sql)
}

// 查找
const idFind = (id) => {
    const sql = `SELECT * FROM note WHERE id = '${id}'`;
    return allServices.query(sql)

}
// 插入
const insertNote = (values) => {
    const sql = `insert into note (
    note_content,
    c_time,
    m_time,
    head_img,
    note_type,
    userid,
    nickname)
    VALUES (
        '${values.note_content}',
        '${values.c_time}',
        '${values.m_time}',
        '${values.head_img}',
        '${values.note_type}',
        '${values.userid}',
        '${values.nickname}'
    ) `
    return allServices.query(sql)
}

module.exports = {
    userLogin,
    userFind,
    userRegister,
    typeFind,
    idFind,
    insertNote
}