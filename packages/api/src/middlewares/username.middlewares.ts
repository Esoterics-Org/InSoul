import * as Interfaces from "@interfaces";
import * as Errors from "@error";
import { User } from "@prisma/client";

/**
 * @description Middleware to check whether the user is logged in, if not then sends an error response
 */
const isUsernameAssigned: Interfaces.Middleware.Sync = (req, res, next) => {
  if ((req.user! as User).username) {
    return next();
  } else {
    return res
      .status(new Errors.Username.UsernameNotRegistered().status)
      .json(new Errors.Username.UsernameNotRegistered());
  }
};

export { isUsernameAssigned };
