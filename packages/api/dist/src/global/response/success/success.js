"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSuccess = void 0;
class CustomSuccess {
    constructor(message, status) {
        this.message = message;
        this.status = status !== null && status !== void 0 ? status : 200;
        this.success = true;
    }
}
exports.CustomSuccess = CustomSuccess;
//# sourceMappingURL=success.js.map