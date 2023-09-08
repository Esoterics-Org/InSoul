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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationError = exports.InvalidPassword = exports.InvalidEmail = exports.EmailExist = exports.UsernameExist = exports.UsernameOrPasswordNotMatch = exports.UserAlreadyLoggedIn = exports.UserNotLoggedIn = exports.UserNotFound = void 0;
const Error = __importStar(require("."));
class UserNotFound extends Error.Error.CustomError {
    constructor() {
        super("User Not Found", 404);
    }
}
exports.UserNotFound = UserNotFound;
class UserNotLoggedIn extends Error.Error.CustomError {
    constructor() {
        super("User Not Logged In", 404);
    }
}
exports.UserNotLoggedIn = UserNotLoggedIn;
class UserAlreadyLoggedIn extends Error.Error.CustomError {
    constructor() {
        super("User Already Logged In", 404);
    }
}
exports.UserAlreadyLoggedIn = UserAlreadyLoggedIn;
class UsernameOrPasswordNotMatch extends Error.Error.CustomError {
    constructor() {
        super("User Not Found", 404);
    }
}
exports.UsernameOrPasswordNotMatch = UsernameOrPasswordNotMatch;
class UsernameExist extends Error.Error.CustomError {
    constructor() {
        super("Username Exists", 404);
    }
}
exports.UsernameExist = UsernameExist;
class EmailExist extends Error.Error.CustomError {
    constructor() {
        super("Email Exists", 404);
    }
}
exports.EmailExist = EmailExist;
class InvalidEmail extends Error.Error.CustomError {
    constructor() {
        super("Invalid Email Entered", 404);
    }
}
exports.InvalidEmail = InvalidEmail;
class InvalidPassword extends Error.Error.CustomError {
    constructor() {
        super("Password Must Contain 1 Special Character, 1 Digit and 1 Capital Character", 404);
    }
}
exports.InvalidPassword = InvalidPassword;
class AuthenticationError extends Error.Error.CustomError {
    constructor() {
        super("Authentication error", 500);
    }
}
exports.AuthenticationError = AuthenticationError;
//# sourceMappingURL=auth.error.js.map