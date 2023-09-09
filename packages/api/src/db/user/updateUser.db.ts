import { prisma } from "@utils";

const updateUserCommunityByEmail = (email: string, communityId: string) => {
  return prisma.user.update({
    where: {
      email,
    },
    data: {
      communityId,
    },
  });
};

const updateUserUsernameByEmail = async (email: string, username: string) => {
  const user = await prisma.user.findFirst({ where: { email } });

  if (user!.username) {
    await prisma.usernameRecord.create({
      data: {
        username: user!.username,
        expiry: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
        userId: user!.id,
      },
    });
    return prisma.user.update({
      where: {
        email,
      },
      data: {
        username,
      },
    });
  } else {
    return prisma.user.update({
      where: {
        email,
      },
      data: {
        username,
      },
    });
  }
};

export { updateUserCommunityByEmail, updateUserUsernameByEmail };
