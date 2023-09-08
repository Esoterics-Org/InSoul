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
exports.createUser = void 0;
const bcrypt_1 = require("bcrypt");
const _utils_1 = require("../../utils");
const createUser = (registerBody) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password, username } = registerBody;
    const user = yield _utils_1.prisma.user.create({
        data: {
            email,
            name,
            username,
            password: yield (0, bcrypt_1.hash)(password, 10),
        },
    });
    return user;
});
exports.createUser = createUser;
//# sourceMappingURL=createUser.db.js.map