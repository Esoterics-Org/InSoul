import * as Error from "@error";

/**
 * @description Error class when community is not found with the given id
 */
class UsernameNotRegistered extends Error.Error.CustomError {
  constructor() {
    super("Username is not registered.", 403);
  }
}

export { UsernameNotRegistered };
