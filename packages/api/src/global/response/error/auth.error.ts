import * as Error from "@error";

/**
 * @description Error class when user is not found with the given identifiers
 */
class UserNotFound extends Error.Error.CustomError {
  constructor() {
    super("User Not Found", 404);
  }
}

/**
 * @description Error class when user is not logged in but wants to access/request for resources
 */
class UserNotLoggedIn extends Error.Error.CustomError {
  constructor() {
    super("User Not Logged In", 404);
  }
}

/**
 * @description Error class when user is already logged in and wants to authenticate again
 */
class UserAlreadyLoggedIn extends Error.Error.CustomError {
  constructor() {
    super("User Already Logged In", 404);
  }
}

/**
 * @description Error class when username and password combination mismatched
 */
class UsernameOrPasswordNotMatch extends Error.Error.CustomError {
  constructor() {
    super("User Not Found", 404);
  }
}

/**
 * @description Error class when user with given username already exists
 */
class UsernameExist extends Error.Error.CustomError {
  constructor() {
    super("Username Exists", 404);
  }
}

/**
 * @description Error class when user with given email id already exists
 */
class EmailExist extends Error.Error.CustomError {
  constructor() {
    super("Email Exists", 404);
  }
}

/**
 * @description Error class when the email id provided is of invalid format
 */
class InvalidEmail extends Error.Error.CustomError {
  constructor() {
    super("Invalid Email Entered", 404);
  }
}

/**
 * @description Error class when password entered doesn't match the criteria
 */
class InvalidPassword extends Error.Error.CustomError {
  constructor() {
    super(
      "Password Must Contain 1 Special Character, 1 Digit and 1 Capital Character",
      404
    );
  }
}

/**
 * @description Error class when there is authentication error due to passport
 */
class AuthenticationError extends Error.Error.CustomError {
  constructor() {
    super("Authentication error", 500);
  }
}

export {
  UserNotFound,
  UserNotLoggedIn,
  UserAlreadyLoggedIn,
  UsernameOrPasswordNotMatch,
  UsernameExist,
  EmailExist,
  InvalidEmail,
  InvalidPassword,
  AuthenticationError,
};
