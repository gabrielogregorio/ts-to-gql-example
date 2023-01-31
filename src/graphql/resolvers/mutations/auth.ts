import { GqlModelAuth } from '@/models/auth';

type SignUpPayload = {
  signUpPayload: {
    username: string;
    password: string;
  };
};

type ValidatePayload = {
  validateTokenPayload: {
    token: string;
  };
};

type ValidateResponse = {
  success: boolean;
};

type GqlMutationAuth = {
  signUp: (_: unknown, signUpPayload: SignUpPayload) => Promise<GqlModelAuth>;
  validateToken: (_: unknown, validateTokenPayload: ValidatePayload) => Promise<ValidateResponse>;
};

export const MutationAuthResolver: GqlMutationAuth = {
  signUp: async (_, { signUpPayload: { username, password } }) => {
    console.log({ username, password });
    return { token: 'qwertyuiop' };
  },

  validateToken: async (_, { validateTokenPayload: { token } }) => {
    console.log({ token });
    return { success: true };
  },
};
