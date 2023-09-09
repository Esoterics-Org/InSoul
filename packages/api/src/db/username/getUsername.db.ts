import { prisma } from "@utils";

const getPastUsernameOfUser = async (email: string) => {
  return await prisma.user.findFirst({
    where: {
      email,
    },
    select: {
      pastUsernames: true,
    },
  });
};

const getPastUsernameOfOtherUser = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return await prisma.usernameRecord.findMany({
    where: {
      userId: {
        not: user!.id,
      },
    },
  });
};

export { getPastUsernameOfUser, getPastUsernameOfOtherUser };
