'use client';
import { GalleryVerticalEnd } from 'lucide-react';
import { LoginForm } from '@/components/layouts/auth/login-form';
import Image from 'next/image';
import SignUp from '@/components/layouts/landing/sign-up';
import { Icons } from '@/components/icons';

export default function LoginPage() {

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left Column - Login */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center">
              <Icons.logo />
            </div>
            Findre
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm onLogin={async (email, password) => {
              // Handle login logic here
              await Promise.resolve();
            }} />
          </div>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <Image src="/background.png" alt="Image" fill />
      </div>
    </div>
  );
} 