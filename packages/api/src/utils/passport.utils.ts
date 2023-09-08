import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import * as Services from "@services";

const initializePassport = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "identifier",
        passwordField: "password",
        session: true,
      },
      Services.AuthService.verifyUser
    )
  );
};

passport.serializeUser(Services.AuthService.serializeUserCallbackFunction);

passport.deserializeUser(Services.AuthService.deserializeUserCallbackFunction);

export default initializePassport;
