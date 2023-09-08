import * as Success from "@success";

/**
 * @description Success class when user successfully logged in
 */
class UserLoggedIn extends Success.Success.CustomSuccess {
  constructor() {
    super("User Logged In Successfully.", 200);
  }
}

/**
 * @description Success class when user is successfully logged out
 */
class UserLoggedOut extends Success.Success.CustomSuccess {
  constructor() {
    super("User Logged Out Successfully.", 200);
  }
}

/**
 * @description Success class when user is created successfully
 */
class UserCreated extends Success.Success.CustomSuccess {
  constructor() {
    super("User Created Successfully.", 201);
  }
}

export { UserLoggedIn, UserLoggedOut, UserCreated };
