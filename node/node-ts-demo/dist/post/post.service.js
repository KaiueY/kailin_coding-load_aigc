"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = void 0;
const mysql_1 = require("../app/database/mysql");
const post_provider_1 = require("./post.provider");
exports.getPostById = async (postId) => {
    const userId = 1;
    const statement = `
        SELECT 
            post.id,
            post.title,
            post.content,
            ${post_provider_1.sqlFragment.user},
            ${post_provider_1.sqlFragment.totalComments},
            ${post_provider_1.sqlFragment.tags},
            ${post_provider_1.sqlFragment.totalLikes},
            (
                SELECT COUNT(user_like_post.postId)
                FROM user_like_post
                WHERE 
                    user_like_post.postId = postId
                    && user_like_post.userId = ${userId}
            ) as liked
        FROM post
        ${post_provider_1.sqlFragment.leftJoinUser}
        ${post_provider_1.sqlFragment.leftJoinTag}
        WHERE post.id = ?
    `;
    const [data] = await mysql_1.connection.promise().query(statement, postId);
    if (!data[0].id) {
        throw new Error('NOT_FOUND');
    }
    return data[0];
};
//# sourceMappingURL=post.service.js.map