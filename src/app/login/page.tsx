'use client';

import { LoginForm } from '@/components/layouts/auth/login-form';
import Image from 'next/image';
import SignUp from '@/components/layouts/landing/sign-up';
import { Icons } from '@/components/icons';
import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function LoginPage() {
  const { language } = useLanguage();
  const t = getTranslations(language).auth.login;

  const handleLogin = async (email: string, password: string) => {
    // TODO: Implement actual login logic
    console.log('Login attempt with:', email);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Column - Login Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-background relative">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-10 items-center justify-center">
              <Icons.logo />
            </div>
            Findre
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <LoginForm onLogin={handleLogin} />
          </div>
        </div>
      </div>

      {/* Right Column - Background Image */}
      <div className="relative hidden lg:block">
        <Image 
          src="/background.png" 
          alt="Background" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </div>
  );
} 