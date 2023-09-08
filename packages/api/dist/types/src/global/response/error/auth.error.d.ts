import * as Error from "../../../../../src/global/response/error";
declare class UserNotFound extends Error.Error.CustomError {
    constructor();
}
declare class UserNotLoggedIn extends Error.Error.CustomError {
    constructor();
}
declare class UserAlreadyLoggedIn extends Error.Error.CustomError {
    constructor();
}
declare class UsernameOrPasswordNotMatch extends Error.Error.CustomError {
    constructor();
}
declare class UsernameExist extends Error.Error.CustomError {
    constructor();
}
declare class EmailExist extends Error.Error.CustomError {
    constructor();
}
declare class InvalidEmail extends Error.Error.CustomError {
    constructor();
}
declare class InvalidPassword extends Error.Error.CustomError {
    constructor();
}
declare class AuthenticationError extends Error.Error.CustomError {
    constructor();
}
export { UserNotFound, UserNotLoggedIn, UserAlreadyLoggedIn, UsernameOrPasswordNotMatch, UsernameExist, EmailExist, InvalidEmail, InvalidPassword, AuthenticationError, };
