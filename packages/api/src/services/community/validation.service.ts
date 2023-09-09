import * as DB from "@db";
import * as Error from "@error";

const checkCommunity = async (communityId: string) => {
  if (!(await DB.Community.getCommunity(communityId))) {
    return new Error.Community.CommunityNotFound();
  }
  return null;
};

const checkCommunityWithName = async (communityName: string) => {
  if (await DB.Community.getCommunityWithName(communityName)) {
    return new Error.Community.CommunityWithSameNameExist();
  }
  return null;
};

export { checkCommunity, checkCommunityWithName };
