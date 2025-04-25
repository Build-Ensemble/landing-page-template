import en from '@/translations/en.json';
import fr from '@/translations/fr.json';

export type Language = 'en' | 'fr';

const translations = {
  en,
  fr,
};

export const getTranslation = (key: string, language: Language = 'en'): string => {
  const keys = key.split('.');
  let value: any = translations[language];

  for (const k of keys) {
    if (value === undefined) return key;
    value = value[k];
  }

  return value || key;
};

export const getTranslations = (language: Language = 'en') => {
  return translations[language];
}; 