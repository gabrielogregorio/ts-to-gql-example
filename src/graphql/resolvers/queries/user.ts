import { GqlModelUserSelect } from '@/models/User';

type getUserType = {
  id: {
    id: string;
  };
};

type GqlQueryUser = {
  getUsers: () => Promise<GqlModelUserSelect[]>;
  getUser: (_: unknown, id: getUserType) => Promise<GqlModelUserSelect>;
  getMe: () => Promise<GqlModelUserSelect>;
};

export const QueryUserResolver: GqlQueryUser = {
  async getUsers(): Promise<GqlModelUserSelect[]> {
    return [
      {
        id: '123',
        username: 'username-mock',
        name: 'name-mock',
        image: 'image-mock',
      },
    ];
  },

  async getUser(_, { id: { id } }): Promise<GqlModelUserSelect> {
    console.log(id);

    return {
      id: '123',
      username: 'username-mock',
      name: 'name-mock',
      image: 'image-mock',
    };
  },

  getMe: async (): Promise<GqlModelUserSelect> => ({
    id: '123',
    username: 'username-mock',
    name: 'name-mock',
    image: 'image-mock',
  }),
};
