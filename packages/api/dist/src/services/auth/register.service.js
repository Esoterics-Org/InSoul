"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.checkUserInput = exports.validateUserInput = exports.checkUser = void 0;
const DB = __importStar(require("../../db"));
const Constants = __importStar(require("../../global/constants"));
const Errors = __importStar(require("../../global/response/error"));
const checkUser = (registerBody) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, username } = registerBody;
    if (yield DB.User.getUserFromUsername(username)) {
        return new Errors.Auth.UsernameExist();
    }
    if (yield DB.User.getUserFromEmail(email)) {
        return new Errors.Auth.EmailExist();
    }
    return null;
});
exports.checkUser = checkUser;
const validateUserInput = (registerBody) => {
    const { email, password } = registerBody;
    if (!Constants.Auth.EMAIL_REGEX.test(email)) {
        return new Errors.Auth.InvalidEmail();
    }
    if (!Constants.Auth.PASSWORD_REGEX.test(password)) {
        return new Errors.Auth.InvalidPassword();
    }
    return null;
};
exports.validateUserInput = validateUserInput;
const checkUserInput = (registerBody) => {
    const { email, name, password, username } = registerBody;
    if (!email || !name || !password || !username) {
        return new Errors.Common.MissingInput();
    }
    if (typeof email !== "string" ||
        typeof name !== "string" ||
        typeof password !== "string" ||
        typeof username !== "string") {
        return new Errors.Common.InputTypeError();
    }
    return null;
};
exports.checkUserInput = checkUserInput;
//# sourceMappingURL=register.service.js.map