"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializePassport = exports.prisma = void 0;
const prisma_utils_1 = __importDefault(require("./prisma.utils"));
exports.prisma = prisma_utils_1.default;
const passport_utils_1 = __importDefault(require("./passport.utils"));
exports.initializePassport = passport_utils_1.default;
//# sourceMappingURL=index.js.map