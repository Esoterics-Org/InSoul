import { hash } from "bcrypt";
import { prisma } from "@utils";

import * as Interfaces from "@interfaces";

/**
 * @param registerBody request body for User Registration route, containing `name`, `email`, `username`, `password`
 * @description Creates the user with the given data and returns the user
 */
const createUser = async (registerBody: Interfaces.Auth.RegisterBody) => {
  const { email, name, password, username } = registerBody;

  const user = await prisma.user.create({
    data: {
      email,
      name,
      username,
      password: await hash(password, 10),
    },
  });

  return user;
};

export { createUser };
