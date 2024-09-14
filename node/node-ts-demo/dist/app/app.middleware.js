"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
exports.defaultErrorHandler = (error, request, response, next) => {
    const message = error.message;
    response.status(500).send({
        message,
    });
};
//# sourceMappingURL=app.middleware.js.map