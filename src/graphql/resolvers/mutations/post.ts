import { GqlModelAuth } from '@/models/auth';
import { GqlModelPostSelect } from '@/models/Post';

type DeletePostResponse = {
  count: number;
};

type CreatePostPayload = {
  createPostPayload: {
    body: string;
    img: string;
    video: string;
  };
};

type UpdatePostPayload = {
  updatePostPayload: {
    body: string;
    img: string;
    video: string;
    id: string;
  };
};

type HandlePostPayload = {
  handlePostPayload: {
    postId: string;
  };
};

type UpdatePostResponseType = {
  count: number;
};

type HandlePostResponse = {
  includeLike: boolean;
};

type deletePostPayload = {
  id: {
    id: string;
  };
};

type GqlMutationPost = {
  createPost: (
    _: unknown,
    createPostPayload: CreatePostPayload,
    context: GqlModelAuth,
  ) => Promise<GqlModelPostSelect>;
  updatePost: (
    _: unknown,
    updatePostPayload: UpdatePostPayload,
    context: GqlModelAuth,
  ) => Promise<UpdatePostResponseType>;
  deletePost: (
    _: unknown,
    id: deletePostPayload,
    context: GqlModelAuth,
  ) => Promise<DeletePostResponse>;
  handleLike: (
    _: unknown,
    handlePostPayload: HandlePostPayload,
    context: GqlModelAuth,
  ) => Promise<HandlePostResponse>;
};

export const MutationPostResolver: GqlMutationPost = {
  createPost: async (
    _,
    { createPostPayload: { body, img, video } },
    { token },
  ): Promise<GqlModelPostSelect> => {
    console.log(body, img, video, token);

    return {
      id: '123',
      author: '456',
      body: 'mock-body',
      img: 'mock-img',
      video: 'mock-video',
      likes: ['123', '456'],
    };
  },

  updatePost: async (
    _,
    { updatePostPayload: { body, img, video, id } },
  ): Promise<{ count: number }> => {
    console.log(body, img, video, id);
    return { count: 2 };
  },

  handleLike: async (
    _,
    { handlePostPayload: { postId } },
    { token },
  ): Promise<{ includeLike: boolean }> => {
    console.log(postId, token);

    return { includeLike: true };
  },

  deletePost: async (_, { id: { id } }) => {
    console.log(id);

    return { count: 1 };
  },
};
