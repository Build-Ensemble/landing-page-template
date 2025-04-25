'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Language } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getSystemLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const systemLang = navigator.language.split('-')[0];
    return systemLang === 'fr' ? 'fr' : 'en';
  }
  return 'en';
};

const getStoredLanguage = (): Language | null => {
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('preferredLanguage');
    return storedLang === 'fr' || storedLang === 'en' ? storedLang : null;
  }
  return null;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState<Language>(() => {
    // First try to get from localStorage
    const storedLang = getStoredLanguage();
    if (storedLang) return storedLang;
    
    // Then try URL parameter
    const langParam = searchParams?.get('lang');
    if (langParam === 'fr' || langParam === 'en') {
      return langParam;
    }
    
    // Finally fall back to system language
    return getSystemLanguage();
  });

  useEffect(() => {
    // Save language preference to localStorage whenever it changes
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    // Update URL with query parameter
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('lang', lang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 