import * as Interfaces from "@interfaces";
import * as Services from "@services";
import * as DB from "@db";
import * as Success from "@success";
import * as Errors from "@error";

/**
 * @description Controller for registration of user
 */
const register: Interfaces.Controller.Async = async (req, res) => {
  try {
    const checkUserInputErrorReponse = Services.AuthService.checkUserInput(
      req.body as Interfaces.Auth.RegisterBody
    );

    if (checkUserInputErrorReponse) {
      return res
        .status(checkUserInputErrorReponse.status)
        .json(checkUserInputErrorReponse);
    }

    const checkUserErrorResponse = await Services.AuthService.checkUser(
      req.body as Interfaces.Auth.RegisterBody
    );

    if (checkUserErrorResponse) {
      return res
        .status(checkUserErrorResponse.status)
        .json(checkUserErrorResponse);
    }

    const validateUserInputErrorResponse =
      Services.AuthService.validateUserInput(
        req.body as Interfaces.Auth.RegisterBody
      );

    if (validateUserInputErrorResponse) {
      return res
        .status(validateUserInputErrorResponse.status)
        .json(validateUserInputErrorResponse);
    }

    await DB.User.createUser(req.body as Interfaces.Auth.RegisterBody);

    return res
      .status(new Success.Auth.UserCreated().status)
      .json(new Success.Auth.UserCreated());
  } catch (err) {
    console.log((err as Error).message);
    return res.json(new Errors.Server.InternalServerError());
  }
};

export { register };
