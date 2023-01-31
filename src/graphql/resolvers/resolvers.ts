import { MutationResolvers } from '@/graphql/resolvers/mutations';
import { QueriesResolvers } from '@/graphql/resolvers/queries';

export const resolvers = {
  Query: {
    ...QueriesResolvers,
  },
  Mutation: {
    ...MutationResolvers,
  },
};
