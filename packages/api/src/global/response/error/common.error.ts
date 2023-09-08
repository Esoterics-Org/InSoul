import * as Error from "@error";

/**
 * @description Error class for missing inputs which are required
 */
class MissingInput extends Error.Error.CustomError {
  constructor() {
    super("Missing Inputs", 406);
  }
}

/**
 * @description Error class when required types of objects mismatched
 */
class InputTypeError extends Error.Error.CustomError {
  constructor() {
    super("Input has invalid type", 406);
  }
}

export { MissingInput, InputTypeError };
