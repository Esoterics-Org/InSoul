import { prisma } from "@utils";

const getCommunity = async (communityId: string) => {
  return await prisma.community.findFirst({
    where: {
      id: communityId,
    },
  });
};

const getCommunityWithName = async (communityName: string) => {
  return await prisma.community.findFirst({
    where: {
      name: communityName,
    },
  });
};

const getAllCommunities = async () => {
  return await prisma.community.findMany();
};

export { getCommunity, getCommunityWithName, getAllCommunities };
