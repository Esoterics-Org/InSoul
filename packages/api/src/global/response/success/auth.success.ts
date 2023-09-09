import * as Success from "@success";
import { User } from "@prisma/client";

/**
 * @description Success class when user successfully logged in
 */
class UserLoggedIn extends Success.Success.CustomSuccess<User> {
  constructor(user: User) {
    super(user, 200);
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

/**
 * @description Success class when username is updated successfully
 */
class UsernameUpdated extends Success.Success.CustomSuccess<User> {
  constructor(user: User) {
    super(user, 200);
  }
}

export { UserLoggedIn, UserLoggedOut, UserCreated, UsernameUpdated };
