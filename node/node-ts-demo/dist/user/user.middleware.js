"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.validateUserData = void 0;
exports.validateUserData = (req, res, next) => {
    console.log('validate');
    next();
};
exports.hashPassword = (req, res, next) => {
    res.send('haha');
};
//# sourceMappingURL=user.middleware.js.map