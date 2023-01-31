import { QueryPostResolver } from '@/graphql/resolvers/queries/post';
import { QueryUserResolver } from '@/graphql/resolvers/queries/user';
import { QueryPreferencesResolver } from '@/graphql/resolvers/queries/preferences';
import { QueryCommentResolver } from '@/graphql/resolvers/queries/comments';
import { QueryBadgeResolver } from '@/graphql/resolvers/queries/badge';

export const QueriesResolvers = {
  ...QueryPostResolver,
  ...QueryUserResolver,
  ...QueryPreferencesResolver,
  ...QueryCommentResolver,
  ...QueryBadgeResolver,
};
