import * as Error from "../../../../../src/global/response/error";
declare class MissingInput extends Error.Error.CustomError {
    constructor();
}
declare class InputTypeError extends Error.Error.CustomError {
    constructor();
}
export { MissingInput, InputTypeError };
