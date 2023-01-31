import { GqlModelBadge } from '@/models/Badges';

type getBadgePayload = {
  id: {
    id: string;
  };
};

type GqlQueryBadge = {
  getBadges: () => Promise<GqlModelBadge[]>;
  getBadge: (_: unknown, id: getBadgePayload) => Promise<GqlModelBadge>;
};

export const QueryBadgeResolver: GqlQueryBadge = {
  async getBadges() {
    return [
      {
        name: 'name-mock',
        imageUrl: 'image-mock',
        backgroundColor: 'bg-mock',
        description: 'description-mock',
        dateOfBadge: 'date-mock',
        isVisible: true,
      },
    ];
  },

  async getBadge(_, { id }) {
    console.log(id);
    return {
      name: 'name-mock',
      imageUrl: 'image-mock',
      backgroundColor: 'bg-mock',
      description: 'description-mock',
      dateOfBadge: 'date-mock',
      isVisible: true,
    };
  },
};
