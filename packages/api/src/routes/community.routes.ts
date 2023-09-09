import { Router } from "express";

import * as Controllers from "@controllers";

const router: Router = Router({ mergeParams: true });

router.get("/", Controllers.Community.searchCommunityByName);

router.get("/all", Controllers.Community.getAllCommunities);

router.post("/", Controllers.Community.createCommunity);

export default router;
