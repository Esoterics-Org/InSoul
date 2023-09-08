import * as Success from "@success";
import { Community } from "@prisma/client";

/**
 * @description Success class when user successfully fetched all the communities
 */
class SuccessfullyFetchCommunities extends Success.Success.CustomSuccess<
  Community[]
> {
  constructor(communities: Community[]) {
    super(communities, 200);
  }
}

class CommunityCreateSuccess extends Success.Success.CustomSuccess {
  constructor() {
    super("Successfully created community.", 200);
  }
}

export { SuccessfullyFetchCommunities, CommunityCreateSuccess };
