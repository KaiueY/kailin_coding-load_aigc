"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALLOW_ORIGIN = exports.MYSQL_DATABASE = exports.MYSQL_PASSWORD = exports.MYSQL_USER = exports.MYSQL_PORT = exports.MYSQL_HOST = exports.APP_PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
_a = process.env.APP_PORT, exports.APP_PORT = _a === void 0 ? 3000 : _a;
_b = process.env, exports.MYSQL_HOST = _b.MYSQL_HOST, exports.MYSQL_PORT = _b.MYSQL_PORT, exports.MYSQL_USER = _b.MYSQL_USER, exports.MYSQL_PASSWORD = _b.MYSQL_PASSWORD, exports.MYSQL_DATABASE = _b.MYSQL_DATABASE;
exports.ALLOW_ORIGIN = process.env.ALLOW_ORIGIN;
//# sourceMappingURL=app.config.js.map