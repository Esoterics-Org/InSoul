import { VerifyFunction } from "passport-local";
import * as Interfaces from "../../../../src/global/interfaces";
declare const verifyUser: VerifyFunction;
declare const serializeUserCallbackFunction: Interfaces.Passport.PassportSerializeUserCallback;
declare const deserializeUserCallbackFunction: Interfaces.Passport.PassportDeserializeUserCallback;
export { verifyUser, serializeUserCallbackFunction, deserializeUserCallbackFunction, };
