import * as Interfaces from "@interfaces";
import * as DB from "@db";
import * as Errors from "@error";

const checkCommunityExist: Interfaces.Middleware.Async = async (
  req,
  res,
  next
) => {
  if (await DB.Community.getCommunity(req.body.communityId)) {
    return next();
  } else {
    return res
      .status(new Errors.Community.CommunityNotFound().status)
      .json(new Errors.Community.CommunityNotFound());
  }
};

export { checkCommunityExist };
