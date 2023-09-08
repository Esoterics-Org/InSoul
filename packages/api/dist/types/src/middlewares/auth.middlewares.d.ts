import { ErrorRequestHandler } from "express";
import * as Interfaces from "../../../src/global/interfaces";
declare const passportErrorHandler: ErrorRequestHandler;
declare const isLoggedIn: Interfaces.Middleware.Sync;
declare const isNotLoggedIn: Interfaces.Middleware.Sync;
export { passportErrorHandler, isLoggedIn, isNotLoggedIn };
