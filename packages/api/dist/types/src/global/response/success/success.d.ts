import * as Interfaces from "../../../../../src/global/interfaces";
declare class CustomSuccess<T = string> implements Interfaces.JSONResponse.JSONResponse<T> {
    success: boolean;
    status: number;
    message: T;
    constructor(message: T, status?: number);
}
export { CustomSuccess };
