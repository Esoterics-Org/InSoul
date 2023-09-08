"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMAIL_REGEX = exports.PASSWORD_REGEX = exports.COOKIE_MAX_AGE = void 0;
const COOKIE_MAX_AGE = 24 * 60 * 60 * 1000;
exports.COOKIE_MAX_AGE = COOKIE_MAX_AGE;
const PASSWORD_REGEX = /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+=[\]\\|<>,.?/:;"'])[A-Za-z0-9!@#$%^&*()_+\-=[\]\\|<>,.?/:;"']{8,20}/;
exports.PASSWORD_REGEX = PASSWORD_REGEX;
const EMAIL_REGEX = /[0-9A-Za-z._]+@[A-Za-z]{2,}(\.[0-9A-Za-z]{2,})+/;
exports.EMAIL_REGEX = EMAIL_REGEX;
//# sourceMappingURL=auth.constants.js.map