'use client';
import SignUp from '@/components/layouts/landing/sign-up';
import { Navbar } from '@/components/layouts/landing/Navbar';
import Image from 'next/image';
import { GalleryVerticalEnd } from 'lucide-react';
import { Icons } from '@/components/icons';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SignUpPage() {
  const { language } = useLanguage();
  const t = getTranslations(language).auth.signup;

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Column - Sign Up Form */}
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
            <SignUp />
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
