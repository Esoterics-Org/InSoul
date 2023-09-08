import { Router } from "express";
import passport from "passport";

import * as Middlewares from "@middlewares";
import * as Controllers from "@controllers";

const router: Router = Router({ mergeParams: true });

router.post(
  "/login",
  Middlewares.Auth.isNotLoggedIn,
  passport.authenticate("local", { failWithError: true }),
  Middlewares.Auth.passportErrorHandler,
  Controllers.Auth.login
);

router.post(
  "/register",
  Middlewares.Auth.isNotLoggedIn,
  Controllers.Auth.register
);

router.post("/logout", Middlewares.Auth.isLoggedIn, Controllers.Auth.logout);

export default router;
