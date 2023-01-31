import { MutationBadgeResolver } from '@/graphql/resolvers/mutations/badges';
import { MutationPreferencesResolver } from '@/graphql/resolvers/mutations/preferences';
import { MutationCommentResolver } from '@/graphql/resolvers/mutations/comments';
import { MutationPostResolver } from '@/graphql/resolvers/mutations/post';
import { UserResolverMutation } from '@/graphql/resolvers/mutations/user';
import { MutationAuthResolver } from '@/graphql/resolvers/mutations/auth';

export const MutationResolvers = {
  ...MutationPreferencesResolver,
  ...UserResolverMutation,
  ...MutationPostResolver,
  ...MutationBadgeResolver,
  ...MutationCommentResolver,
  ...MutationAuthResolver,
};
