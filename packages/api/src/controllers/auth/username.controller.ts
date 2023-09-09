import * as Interfaces from "@interfaces";
import * as Services from "@services";
import * as DB from "@db";
import * as Success from "@success";
import * as Errors from "@error";
import { User } from "@prisma/client";

const assignUsername: Interfaces.Controller.Async = async (req, res) => {
  try {
    const { email } = req.user as User;
    const username = await Services.UsernameService.generateUniqueUserName(
      email
    );
    const updatedUser = await DB.User.updateUserUsernameByEmail(
      email,
      username
    );
    return res
      .status(new Success.Auth.UsernameUpdated(updatedUser).status)
      .json(new Success.Auth.UsernameUpdated(updatedUser));
  } catch (err) {
    return res
      .status(new Errors.Server.InternalServerError().status)
      .json(new Errors.Server.InternalServerError());
  }
};

export { assignUsername };
