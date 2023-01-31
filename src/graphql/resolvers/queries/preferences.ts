import { GqlModelPreference } from '@/models/Preferences';

type getPreferencesPayload = {
  input: {
    id: string;
  };
};

type GqlQueryPreferences = {
  getPreferences: (_: unknown, id: getPreferencesPayload) => Promise<GqlModelPreference>;
};

export const QueryPreferencesResolver: GqlQueryPreferences = {
  async getPreferences(_, { input: { id } }): Promise<GqlModelPreference> {
    console.log(id);
    return {
      id: '123',
      language: 'pt-BR',
      theme: 'dark',
      viewColoredProfile: true,
      animations: true,
    };
  },
};
