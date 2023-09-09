import * as Interfaces from "@interfaces";
import * as Errors from "@error";
import * as DB from "@db";
import * as Success from "@success";

const updateCommunityOfUser: Interfaces.Controller.Async = async (req, res) => {
  try {
    const { communityId, email } =
      req.body as Interfaces.Community.UpdateUserCommunity;

    const updatedUser = await DB.User.updateUserCommunityByEmail(
      email,
      communityId
    );

    return res
      .status(new Success.Community.UpdatedUserCommunity(updatedUser).status)
      .json(new Success.Community.UpdatedUserCommunity(updatedUser));
  } catch (err) {
    console.log((err as Error).message);
    return res
      .status(new Errors.Server.InternalServerError().status)
      .json(new Errors.Server.InternalServerError());
  }
};

export { updateCommunityOfUser };
