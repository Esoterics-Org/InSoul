interface CreateCommunity {
  name: string;
}

interface UpdateUserCommunity {
  email: string;
  communityId: string;
}

export { CreateCommunity, UpdateUserCommunity };
