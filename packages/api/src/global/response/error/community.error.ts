import * as Error from "@error";

/**
 * @description Error class when community is not found with the given id
 */
class CommunityNotFound extends Error.Error.CustomError {
  constructor() {
    super("Community Not Found", 404);
  }
}

/**
 * @description Error class when community already exists
 */
class CommunityWithSameNameExist extends Error.Error.CustomError {
  constructor() {
    super("Community with same name exist.", 403);
  }
}

export { CommunityNotFound, CommunityWithSameNameExist };
