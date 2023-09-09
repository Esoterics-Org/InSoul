import * as Interfaces from "@interfaces";
import * as DB from "@db";
import * as Services from "@services";
import * as Success from "@success";
import * as Errors from "@error";

const searchCommunityByName: Interfaces.Controller.Async = async (req, res) => {
  try {
    const search = req.query.search as string;

    const communities = await Services.CommunityService.searchCommunitiesByName(
      search
    );

    return res
      .status(
        new Success.Community.SuccessfullyFetchCommunities(communities).status
      )
      .json(new Success.Community.SuccessfullyFetchCommunities(communities));
  } catch (err) {
    console.log((err as Error).message);
    return res.json(new Errors.Server.InternalServerError());
  }
};

const getAllCommunities: Interfaces.Controller.Async = async (_req, res) => {
  try {
    const communities = await DB.Community.getAllCommunities();

    return res
      .status(
        new Success.Community.SuccessfullyFetchCommunities(communities).status
      )
      .json(new Success.Community.SuccessfullyFetchCommunities(communities));
  } catch (err) {
    console.log((err as Error).message);
    return res.json(new Errors.Server.InternalServerError());
  }
};

export { searchCommunityByName, getAllCommunities };
