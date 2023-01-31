import { GqlModelPostSelect } from '@/models/Post';

type getPostPayload = {
  input: {
    id: string;
  };
};

type GqlQueryPost = {
  getPosts: () => Promise<GqlModelPostSelect[]>;
  getPost: (_: unknown, id: getPostPayload) => Promise<GqlModelPostSelect>;
};

export const QueryPostResolver: GqlQueryPost = {
  async getPosts(): Promise<GqlModelPostSelect[]> {
    return [
      {
        id: '987',
        author: '1234',
        body: 'body-mock',
        img: 'image-mock',
        video: 'video-mock',
        likes: ['123', '456'],
      },
    ];
  },

  async getPost(_, { input: { id } }): Promise<GqlModelPostSelect> {
    console.log(id);
    return {
      id: '987',
      author: '1234',
      body: 'body-mock',
      img: 'image-mock',
      video: 'video-mock',
      likes: ['123', '456'],
    };
  },
};
