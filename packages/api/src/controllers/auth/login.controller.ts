import * as Interfaces from "@interfaces";
import { User } from "@prisma/client";
import * as Success from "@success";

/**
 * @description Controller for login, just sends a success response
 */
const login: Interfaces.Controller.Sync = (req, res) => {
  return res
    .status(new Success.Auth.UserLoggedIn(req.user as User).status)
    .json(new Success.Auth.UserLoggedIn(req.user as User));
};

export { login };
