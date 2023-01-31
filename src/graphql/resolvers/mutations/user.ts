import { GqlModelAuth } from '@/models/auth';

type CreateUserPayload = {
  createUserPayload: {
    username: string;
    password: string;
    name: string;
  };
};

type UpdateUserPayload = {
  updateUserPayload: {
    username: string;
    name: string;
    image: string;
  };
};

type CreateUserResponse = {
  id: string;
};

type UpdateUserResponse = {
  count: number;
};

type deleteUserResponse = {
  count: number;
};

type deleteUserPayloadType = {
  id: {
    id: string;
  };
};

type GqlMutationUser = {
  createUser: (_: unknown, createUserPayload: CreateUserPayload) => Promise<CreateUserResponse>;
  updateUser: (
    _: unknown,
    updateUserPayload: UpdateUserPayload,
    context: GqlModelAuth,
  ) => Promise<UpdateUserResponse>;
  deleteUser: (
    _: unknown,
    id: deleteUserPayloadType,
    context: GqlModelAuth,
  ) => Promise<deleteUserResponse>;
};

export const UserResolverMutation: GqlMutationUser = {
  createUser: async (_, { createUserPayload: { username, name, password } }) => {
    console.log(username, name, password);
    return { id: '1234' };
  },

  updateUser: async (
    _,
    { updateUserPayload: { username, name, image } },
    { token },
  ): Promise<{ count: number }> => {
    console.log(token, username, name, image);

    return { count: 1 };
  },

  deleteUser: async (_, body, { token }) => {
    console.log(token);

    return { count: 1 };
  },
};
