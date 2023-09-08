"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFromUsername = exports.getUserFromEmail = exports.getUserFromIdentifier = void 0;
const _utils_1 = require("../../utils");
const getUserFromIdentifier = (identifier) => __awaiter(void 0, void 0, void 0, function* () {
    return yield _utils_1.prisma.user.findFirst({
        where: {
            OR: [{ email: identifier }, { username: identifier }],
        },
    });
});
exports.getUserFromIdentifier = getUserFromIdentifier;
const getUserFromEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield _utils_1.prisma.user.findFirst({
        where: {
            email,
        },
    });
});
exports.getUserFromEmail = getUserFromEmail;
const getUserFromUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return yield _utils_1.prisma.user.findFirst({
        where: {
            username,
        },
    });
});
exports.getUserFromUsername = getUserFromUsername;
//# sourceMappingURL=getUser.db.js.map