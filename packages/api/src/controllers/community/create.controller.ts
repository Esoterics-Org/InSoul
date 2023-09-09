import * as Interfaces from "@interfaces";
import * as Errors from "@error";
import * as Services from "@services";
import * as DB from "@db";
import * as Success from "@success";

const createCommunity: Interfaces.Controller.Async = async (req, res) => {
  try {
    const { name } = req.body as Interfaces.Community.CreateCommunity;

    const checkCommunityNameErrorResponse =
      await Services.CommunityService.checkCommunityWithName(name);

    if (checkCommunityNameErrorResponse) {
      return res
        .status(checkCommunityNameErrorResponse.status)
        .json(checkCommunityNameErrorResponse);
    }

    const createdCommunity = await DB.Community.createCommunity(name);

    return res
      .status(
        new Success.Community.CommunityCreateSuccess(createdCommunity).status
      )
      .json(new Success.Community.CommunityCreateSuccess(createdCommunity));
  } catch (err) {
    console.log((err as Error).message);
    return res.json(new Errors.Server.InternalServerError());
  }
};

export { createCommunity };
