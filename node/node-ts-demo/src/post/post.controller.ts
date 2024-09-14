/**
 * 详情页
 */
// 在koa中，ctx = request = response
import {
    getPostById
} from './post.service'

export const show = async (req, res, next) => {
    // 根据api查找
    const { postId } = req.params
    console.log(next,'pppp');
    
    // console.log(postId);
    try {
        // async中没有
        console.log('正在查找');
        const post = await getPostById(parseInt(postId,10))
        res.send(post)
    } catch (error) {
        // console.log(error,'------');
        // 报错是正常现象 ，此处可正常运行，提示用户即可
        // 向后抛出给异常处理模块
        next(error)
    }

}