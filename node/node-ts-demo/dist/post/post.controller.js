"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const post_service_1 = require("./post.service");
exports.show = async (req, res, next) => {
    const { postId } = req.params;
    console.log(next, 'pppp');
    try {
        console.log('正在查找');
        const post = await post_service_1.getPostById(parseInt(postId, 10));
        res.send(post);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=post.controller.js.map