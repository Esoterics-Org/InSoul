import { Router } from "express";

import * as Controllers from "@controllers";
import * as Middlewares from "@middlewares";

const router: Router = Router({ mergeParams: true });

router.get("/", Controllers.Community.searchCommunityByName);

router.get("/all", Controllers.Community.getAllCommunities);

router.post("/", Controllers.Community.createCommunity);

router.put(
  "/user",
  Middlewares.Auth.isLoggedIn,
  Middlewares.Community.checkCommunityExist,
  Controllers.Community.updateCommunityOfUser
);

export default router;
