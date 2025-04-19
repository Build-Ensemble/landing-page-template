'use client';
import SignUp from '@/components/layouts/landing/sign-up';
import { Navbar } from '@/components/layouts/landing/Navbar';

export default function SignUpPage() {
  return (
    <div className="h-screen w-screen">
      <Navbar
        className="backdrop-blur-md fixed top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto"
        hideAll={true}
      />
      <SignUp className="h-screen w-screen" />
    </div>
  );
}
