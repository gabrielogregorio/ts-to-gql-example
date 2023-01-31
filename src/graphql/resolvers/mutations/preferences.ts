import { GqlModelPreference } from '@/models/Preferences';

type PreferencesInput = {
  preferencesInput: {
    language: string;
    theme: string;
    viewColoredProfile: string;
    animations: string;
  };
};

type PreferencesUpdateInput = {
  preferencesInput: {
    id: string;
    language: string;
    theme: string;
    viewColoredProfile: string;
    animations: string;
  };
};

type GqlMutationPreference = {
  createPreferences: (
    _: unknown,
    preferencesInput: PreferencesInput,
  ) => Promise<GqlModelPreference>;
  updatePreferences: (
    _: unknown,
    preferencesInput: PreferencesUpdateInput,
  ) => Promise<GqlModelPreference>;
};

export const MutationPreferencesResolver: GqlMutationPreference = {
  createPreferences: async (
    _,
    { preferencesInput: { language, theme, viewColoredProfile, animations } },
  ) => {
    console.log(language, theme, viewColoredProfile, animations);
    return {
      id: '123',
      language: 'pt-BR',
      theme: 'dark',
      viewColoredProfile: true,
      animations: true,
    };
  },

  updatePreferences: async (
    _,
    { preferencesInput: { id, language, theme, viewColoredProfile, animations } },
  ) => {
    console.log(id, language, theme, viewColoredProfile, animations);
    return {
      id: '123',
      language: 'pt-BR',
      theme: 'dark',
      viewColoredProfile: true,
      animations: true,
    };
  },
};
