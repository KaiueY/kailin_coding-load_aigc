"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = void 0;
const mysql_1 = require("../app/database/mysql");
const post_provider_1 = require("./post.provider");
exports.getPostById = async (postId) => {
    const statement = `
        SELECT 
            post.id,
            post.title,
            post.content,
            ${post_provider_1.sqlFragment.user}
        FROM post
        ${post_provider_1.sqlFragment.leftJoinUser}
        WHERE post.id = ?
    `;
    const [data] = await mysql_1.connection.promise().query(statement, postId);
    if (!data[0].id) {
        throw new Error('NOT_FOUND');
    }
    return data[0];
};
//# sourceMappingURL=post.service.js.map