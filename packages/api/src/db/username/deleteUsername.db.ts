import { prisma } from "@utils";

const deleteUserNameRecord = (id: string) => {
  return prisma.usernameRecord.delete({
    where: {
      id,
    },
  });
};

export { deleteUserNameRecord };
