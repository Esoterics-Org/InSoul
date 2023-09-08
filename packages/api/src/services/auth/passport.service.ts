import bcrypt from "bcrypt";
import { VerifyFunction } from "passport-local";

import * as DB from "@db";
import * as Interfaces from "@interfaces";
import * as Errors from "@error";

import { User } from "@prisma/client";

/**
 * @param identifier Either `email` or `username` of the user to verify
 * @param password Password entered by the user and to be verified with the password (hashed) stored in DB
 * @param done Function to call once there is `user` or an `error`
 * @description Callback function to verify where the input provided by user matches with that from the DB. Throws error if user is not found or the password is mismatched
 */
const verifyUser: VerifyFunction = async (identifier, password, done) => {
  try {
    const user = await DB.User.getUserFromIdentifier(identifier);

    if (!user) {
      return done(new Errors.Auth.UserNotFound().message, false);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return done(new Errors.Auth.UsernameOrPasswordNotMatch().message, false);
    }

    return done(null, user);
  } catch (err) {
    console.log("ERROR: ", (err as Error).message);
    return done(new Errors.Server.InternalServerError(), false);
  }
};

/**
 * @param user The user once we get when passport verifies the user
 * @param done Function to call once we want to serialize the user data
 * @description Callback function to persist data (after successfull authentication) into session by serializing the email of the user
 */
const serializeUserCallbackFunction: Interfaces.Passport.PassportSerializeUserCallback =
  (user, done) => {
    done(null, (user as User).email);
  };

/**
 * @param data The email of the user serialized
 * @param done Function to call once we deserialize the user of encounter an error
 * @description Callback function for retrieving the whole user data and attaching it to `req.user` using the email of the user which was serialized
 */
const deserializeUserCallbackFunction: Interfaces.Passport.PassportDeserializeUserCallback =
  async (data, done) => {
    try {
      const user = await DB.User.getUserFromEmail(data as string);

      done(null, user);
    } catch (err) {
      console.log("ERROR: ", (err as Error).message);
      return done(new Errors.Server.InternalServerError(), false);
    }
  };

export {
  verifyUser,
  serializeUserCallbackFunction,
  deserializeUserCallbackFunction,
};
