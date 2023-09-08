type PassportSerializeUserCallback = (
  user: Express.User,
  done: (err: any, id?: unknown) => void
) => void;

type PassportDeserializeUserCallback = (
  id: unknown,
  done: (err: any, user?: false | Express.User | null | undefined) => void
) => void;

export { PassportSerializeUserCallback, PassportDeserializeUserCallback };
