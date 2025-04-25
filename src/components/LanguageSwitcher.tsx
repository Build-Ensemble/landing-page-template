'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { getTranslations } from '@/lib/i18n';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language).header.language;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="w-12"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher; 