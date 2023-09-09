import { prisma } from "@utils";

/**
 * @param identifier Either `email` or `username` of the user to find
 * @description Returns the user with the given identifier
 */
const getUserFromIdentifier = async (identifier: string) => {
  return await prisma.user.findFirst({
    where: {
      email: identifier,
    },
  });
};

/**
 * @param email The email of the user to find
 * @description Returns the user with the given email
 */
const getUserFromEmail = async (email: string) => {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
};

export { getUserFromIdentifier, getUserFromEmail };
