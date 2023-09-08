import * as Interfaces from "@interfaces";
import * as DB from "@db";
import * as Constants from "@constants";
import * as Errors from "@error";

/**
 * @param registerBody request body for User Registration route, containing `name`, `email`, `username`, `password`
 * @description Checks whether user with given `identifier` exists in the database
 */
const checkUser = async (registerBody: Interfaces.Auth.RegisterBody) => {
  const { email, username } = registerBody;

  if (await DB.User.getUserFromUsername(username)) {
    return new Errors.Auth.UsernameExist();
  }

  if (await DB.User.getUserFromEmail(email)) {
    return new Errors.Auth.EmailExist();
  }

  return null;
};

/**
 * @param registerBody request body for User Registration route, containing `name`, `email`, `username`, `password`
 * @description Check for email and password, whether satisfies the given REGEX
 */
const validateUserInput = (registerBody: Interfaces.Auth.RegisterBody) => {
  const { email, password } = registerBody;

  if (!Constants.Auth.EMAIL_REGEX.test(email)) {
    return new Errors.Auth.InvalidEmail();
  }

  if (!Constants.Auth.PASSWORD_REGEX.test(password)) {
    return new Errors.Auth.InvalidPassword();
  }

  return null;
};

/**
 * @param registerBody request body for User Registration route, containing `name`, `email`, `username`, `password`
 * @description Checks the user input in the request body whether required fields are there and are of correct data types
 */
const checkUserInput = (registerBody: Interfaces.Auth.RegisterBody) => {
  const { email, name, password, username } = registerBody;

  if (!email || !name || !password || !username) {
    return new Errors.Common.MissingInput();
  }

  if (
    typeof email !== "string" ||
    typeof name !== "string" ||
    typeof password !== "string" ||
    typeof username !== "string"
  ) {
    return new Errors.Common.InputTypeError();
  }

  return null;
};

export { checkUser, validateUserInput, checkUserInput };
