import { ID } from 'ts-to-gql';

export type GqlModelPostSelect = {
  id: ID;
  author: ID;
  body?: string;
  img?: string;
  video?: string;
  likes?: ID[];
};
