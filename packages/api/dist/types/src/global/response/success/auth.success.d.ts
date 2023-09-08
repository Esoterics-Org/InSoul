import * as Success from "../../../../../src/global/response/success";
declare class UserLoggedIn extends Success.Success.CustomSuccess {
    constructor();
}
declare class UserLoggedOut extends Success.Success.CustomSuccess {
    constructor();
}
declare class UserCreated extends Success.Success.CustomSuccess {
    constructor();
}
export { UserLoggedIn, UserLoggedOut, UserCreated };
