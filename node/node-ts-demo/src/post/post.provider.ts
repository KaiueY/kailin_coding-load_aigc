// mysql 的一个函数
// JSON_OBJECT 
export const sqlFragment = {
    // 希望拿到一个JSON对象，包含关联id的表
    user:`
        JSON_OBJECT(
            'id',user.id,
            'name',user.name,
            'avatar',IF(COUNT(avatar.id),1,null)
        ) as user 
    `,
    totalComments:`
        (
            SELECT
                COUNT(comment.id)
           FROM 
                comment
            WHERE
                comment.postId = post.id
        )   as totalComments
    `,
    leftJoinUser:`
        LEFT JOIN user
            ON user.id = post.userId
        LEFT JOIN avatar 
                ON  user.id = avatar.userId
    `
}