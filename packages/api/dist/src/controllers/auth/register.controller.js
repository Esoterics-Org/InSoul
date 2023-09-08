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
exports.register = void 0;
const Services = __importStar(require("../../services"));
const DB = __importStar(require("../../db"));
const Success = __importStar(require("../../global/response/success"));
const Errors = __importStar(require("../../global/response/error"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const checkUserInputErrorReponse = Services.AuthService.checkUserInput(req.body);
        if (checkUserInputErrorReponse) {
            return res
                .status(checkUserInputErrorReponse.status)
                .json(checkUserInputErrorReponse);
        }
        const checkUserErrorResponse = yield Services.AuthService.checkUser(req.body);
        if (checkUserErrorResponse) {
            return res
                .status(checkUserErrorResponse.status)
                .json(checkUserErrorResponse);
        }
        const validateUserInputErrorResponse = Services.AuthService.validateUserInput(req.body);
        if (validateUserInputErrorResponse) {
            return res
                .status(validateUserInputErrorResponse.status)
                .json(validateUserInputErrorResponse);
        }
        yield DB.User.createUser(req.body);
        return res
            .status(new Success.Auth.UserCreated().status)
            .json(new Success.Auth.UserCreated());
    }
    catch (err) {
        console.log(err.message);
        return res.json(new Errors.Server.InternalServerError());
    }
});
exports.register = register;
//# sourceMappingURL=register.controller.js.map