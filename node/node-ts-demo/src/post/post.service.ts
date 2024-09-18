import { connection } from "../app/database/mysql"
import { PostModel } from "./post.model"
import {sqlFragment,} from './post.provider'


export const getPostById = async (postId:number) =>{

    // 关联用户表查询
    // 点赞数
    // 评论总数
    const userId = 1
    const statement = `
        SELECT 
            post.id,
            post.title,
            post.content,
            ${sqlFragment.user},
            ${sqlFragment.totalComments},
            ${sqlFragment.tags},
            ${sqlFragment.totalLikes},
            (
                SELECT COUNT(user_like_post.postId)
                FROM user_like_post
                WHERE 
                    user_like_post.postId = postId
                    && user_like_post.userId = ${userId}
            ) as liked
        FROM post
        ${sqlFragment.leftJoinUser}
        ${sqlFragment.leftJoinTag}
        WHERE post.id = ?
    `
    // ${sqlFragment.user}可以复用 如在其他表查询
    const [data] = await connection.promise().query(statement,postId)
    // console.log("data:",data[0]);
    
    if(!data[0].id){
        throw new Error('NOT_FOUND')
    }
    return data[0]
    
}