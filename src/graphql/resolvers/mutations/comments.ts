import { GqlModelComments } from '@/models/Comments';

type deleteCommentType = {
  deletedCount: number;
};

type CommentCreateInput = {
  commentInput: {
    userId: number;
    body: string;
    postId: string;
    likes: string[];
  };
};

type deleteCommentPayload = {
  id: {
    id: string;
  };
};

type GqlMutationComment = {
  createComment: (_: unknown, commentInput: CommentCreateInput) => Promise<GqlModelComments>;
  deleteComment: (_: unknown, id: deleteCommentPayload) => Promise<deleteCommentType>;
};

export const MutationCommentResolver: GqlMutationComment = {
  createComment: async (_, { commentInput: { userId, body, postId, likes } }) => {
    console.log({ userId, body, postId, likes });

    return {
      userId: '123',
      body: 'mock-body',
      postId: '456',
      likes: ['123', '456'],
    };
  },

  deleteComment: async (_, { id }) => {
    console.log(id);
    return { deletedCount: 1 };
  },
};
