import express from 'express'
import {validateUserData,hashPassword} from './user.middleware'
const router = express.Router()

/**
 * 创建用户 注册
 * 中间件 验证用户数据 加密密码 存储中间件
 */
router.post('/users',validateUserData,hashPassword)

export default router