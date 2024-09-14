"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/posts/:postId', async (req, res) => {
    res.send('hello');
});
exports.default = router;
//# sourceMappingURL=post.router.js.map