// mysql 的一个函数
// JSON_OBJECT 
export const sqlFragment = {
    // 希望拿到一个JSON对象，包含关联id的表
    user:`
        JSON_OBJECT(
            'id':user.id
            'name':user.name
        ) as user 
    `,
    leftJoinUser:`
        LEFT JOIN user
            ON user.id = post.user.id
    `
}