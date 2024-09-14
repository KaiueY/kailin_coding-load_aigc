import { connection } from "../app/database/mysql"
import { PostModel } from "./post.model"
import {sqlFragment} from './post.provider'


export const getPostById = async (postId:number) =>{

    // 关联用户表查询
    // 点赞数
    // 评论总数
    const statement = `
        SELECT 
            post.id,
            post.title,
            post.content,
            ${sqlFragment.user}
        FROM post
        ${sqlFragment.leftJoinUser}
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