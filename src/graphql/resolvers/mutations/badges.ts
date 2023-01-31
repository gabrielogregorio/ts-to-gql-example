import { GqlModelBadge } from '@/models/Badges';

type deleteBadgeType = {
  deletedCount: number;
};

type BadgeCreateInput = {
  badgeInput: {
    name: string;
    imageUrl: string;
    backgroundColor: string;
    description: string;
    dateOfBadge: string;
    isVisible: boolean;
  };
};

type deleteBadgePayload = {
  id: {
    id: string;
  };
};

type GqlMutationBadge = {
  createBadge: (_: unknown, badgeInput: BadgeCreateInput) => Promise<GqlModelBadge>;
  deleteBadge: (_: unknown, id: deleteBadgePayload) => Promise<deleteBadgeType>;
};

export const MutationBadgeResolver: GqlMutationBadge = {
  createBadge: async (
    _,
    { badgeInput: { name, imageUrl, backgroundColor, description, dateOfBadge, isVisible } },
  ) => {
    console.log({
      name,
      imageUrl,
      backgroundColor,
      description,
      dateOfBadge,
      isVisible,
    });

    return {
      name: 'mock-name',
      imageUrl: 'mock-image',
      backgroundColor: 'mock-bg',
      description: 'mock-description',
      dateOfBadge: 'mock-date',
      isVisible: false,
    };
  },

  deleteBadge: async (_, { id: { id } }) => {
    console.log(id);
    return { deletedCount: 2 };
  },
};
