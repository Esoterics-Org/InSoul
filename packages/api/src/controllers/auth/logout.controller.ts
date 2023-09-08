import * as Interfaces from "@interfaces";
import * as Success from "@success";
import * as Errors from "@error";

/**
 * @description Controller for logging out for user, uses the function logout provided by `passport`
 */
const logout: Interfaces.Controller.Sync = (req, res) => {
  try {
    req.logOut();
    return res
      .status(new Success.Auth.UserLoggedOut().status)
      .json(new Success.Auth.UserLoggedOut());
  } catch (err) {
    console.log((err as Error).message);
    return res.json(new Errors.Server.InternalServerError());
  }
};

export { logout };
