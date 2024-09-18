// mysql 函数
// JSON_OBJECT 
export const sqlFragment = {
    // 希望拿到一个JSON对象，包含关联id的表
    user: `
        JSON_OBJECT(
            'id', user.id,
            'name', user.name,
            'avatar', IF(COUNT(avatar.id), 1, null)
        ) as user
    `,
    tags: `
    CAST(
        IF(
          COUNT(tag.id),
          CONCAT(
            '[',
              GROUP_CONCAT(
                DISTINCT JSON_OBJECT(
                  'id', tag.id,
                  'name', tag.name
                )
              ),
            ']'
          ),
          NULL
        ) AS JSON
      ) AS tags  
    `,
    leftJoinTag: `
      LEFT JOIN
        post_tag ON post_tag.postId = post.id
      LEFT JOIN
        tag ON post_tag.tagId = tag.id
    `,
    totalComments: `
        (
            SELECT
                COUNT(comment.id)
            FROM
                comment
            WHERE
                comment.postId = post.id
        ) as totalComments
    `,
    totalLikes: `
        (
            SELECT
                COUNT(user_like_post.postId)
            FROM
                user_like_post
            WHERE
                user_like_post.postId = post.id
        ) as totalLikes
    `,
    leftJoinUser: `
     LEFT JOIN user
            ON user.id = post.userId
     LEFT JOIN avatar
            ON  user.id = avatar.userId
    `
}