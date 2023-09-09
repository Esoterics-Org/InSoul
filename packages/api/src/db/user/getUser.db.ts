import { prisma } from "@utils";

/**
 * @param email The email of the user to find
 * @description Returns the user with the given email
 */
const getUserFromEmail = async (email: string) => {
  return await prisma.user.findFirst({
    where: {
      email,
    },
    include: {
      pastUsernames: true,
    },
  });
};

export { getUserFromEmail };
