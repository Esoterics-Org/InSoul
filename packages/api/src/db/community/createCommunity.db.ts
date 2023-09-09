import { prisma } from "@utils";

const createCommunity = async (communityName: string) => {
  return await prisma.community.create({
    data: {
      name: communityName,
    },
  });
};

export { createCommunity };
