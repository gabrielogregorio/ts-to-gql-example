import { GqlModelComments } from '@/models/Comments';

type getCommentPayload = {
  id: {
    id: number;
  };
};

type GqlQueryComment = {
  getComments: () => Promise<GqlModelComments[]>;
  getComment: (_: unknown, id: getCommentPayload) => Promise<GqlModelComments>;
};

export const QueryCommentResolver: GqlQueryComment = {
  async getComments() {
    return [
      {
        userId: '123',
        body: 'body-mock',
        postId: '456',
        likes: ['987', '765', '123'],
      },
    ];
  },

  async getComment(_, { id }) {
    console.log(id);
    return { userId: '123', body: 'body-mock', postId: '456', likes: ['987', '765', '123'] };
  },
};
