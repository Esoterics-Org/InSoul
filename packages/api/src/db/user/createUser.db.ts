import { hash } from "bcrypt";
import { prisma } from "@utils";

import * as Interfaces from "@interfaces";

/**
 * @param registerBody request body for User Registration route, containing `email`, `communityId`, `password`
 * @description Creates the user with the given data and returns the user
 */
const createUser = async (registerBody: Interfaces.Auth.RegisterBody) => {
  const { email, password, communityId } = registerBody;

  const user = await prisma.user.create({
    data: {
      email,
      password: await hash(password, 10),
      communityId,
    },
  });

  return user;
};

export { createUser };
