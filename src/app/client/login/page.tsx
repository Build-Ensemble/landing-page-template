'use client';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';
import { MagicLinkForm } from '@/components/layouts/auth/magic-link-form';
const Login = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-[89vh] flex-col items-center justify-center gap-6 background">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
            <Icons.logo />
          </div>
          Ensemble
        </a>
        <MagicLinkForm />
      </div>
    </div>
  );
};

export default Login;
