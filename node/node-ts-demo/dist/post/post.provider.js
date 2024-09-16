"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlFragment = void 0;
exports.sqlFragment = {
    user: `
        JSON_OBJECT(
            'id',user.id,
            'name',user.name,
            'avatar',IF(COUNT(avatar.id),1,null)
        ) as user 
    `,
    totalComments: `
        (
            SELECT
                COUNT(comment.id)
           FROM 
                comment
            WHERE
                comment.postId = post.id
        )   as totalComments
    `,
    leftJoinUser: `
        LEFT JOIN user
            ON user.id = post.userId
        LEFT JOIN avatar 
                ON  user.id = avatar.userId
    `
};
//# sourceMappingURL=post.provider.js.map