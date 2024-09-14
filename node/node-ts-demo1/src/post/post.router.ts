/**
 * post.router.ts
 */

import express from 'express'

const router = express.Router()

/**
 * 详情页
 */
router.get(
    '/posts/:postId',
    async (req, res) => {
        res.send('hello')
    }
)

export default router 