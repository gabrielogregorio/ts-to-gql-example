import { ID } from 'ts-to-gql';

export type GqlModelComments = {
  userId: ID;
  body: string;
  postId: ID;
  likes: string[];
};
