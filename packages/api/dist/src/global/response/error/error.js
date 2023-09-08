"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError {
    constructor(message, status) {
        this.message = message;
        this.status = status !== null && status !== void 0 ? status : 400;
        this.success = false;
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=error.js.map