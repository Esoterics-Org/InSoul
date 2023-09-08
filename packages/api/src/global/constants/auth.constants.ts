const COOKIE_MAX_AGE = 24 * 60 * 60 * 1000;

const PASSWORD_REGEX =
  /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+=[\]\\|<>,.?/:;"'])[A-Za-z0-9!@#$%^&*()_+\-=[\]\\|<>,.?/:;"']{8,20}/;
const EMAIL_REGEX = /[0-9A-Za-z._]+@[A-Za-z]{2,}(\.[0-9A-Za-z]{2,})+/;

export { COOKIE_MAX_AGE, PASSWORD_REGEX, EMAIL_REGEX };
