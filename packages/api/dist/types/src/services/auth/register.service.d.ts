import * as Interfaces from "../../../../src/global/interfaces";
import * as Errors from "../../../../src/global/response/error";
declare const checkUser: (registerBody: Interfaces.Auth.RegisterBody) => Promise<Errors.Auth.UsernameExist | Errors.Auth.EmailExist | null>;
declare const validateUserInput: (registerBody: Interfaces.Auth.RegisterBody) => Errors.Auth.InvalidEmail | Errors.Auth.InvalidPassword | null;
declare const checkUserInput: (registerBody: Interfaces.Auth.RegisterBody) => Errors.Common.MissingInput | Errors.Common.InputTypeError | null;
export { checkUser, validateUserInput, checkUserInput };
