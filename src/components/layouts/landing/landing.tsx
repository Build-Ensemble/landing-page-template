'use client';

import { Navbar } from '@/components/layouts/landing/Navbar';
import { Cta } from '@/components/layouts/landing/Cta';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/layouts/landing/Footer';
import FeaturesSection from '@/components/layouts/landing/Features';
import AdvantagesSection from './AdvantagesSection';
import Hero from './Hero';

const Landing = () => {
  const router = useRouter();

  const login = () => {
    router.push('/admin/login');
  };

  const signUp = () => {
    router.push('/admin/register');
  };

 

  return (
    <div className="">
      <Navbar
        className="backdrop-blur-md fixed top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto"
        login={login}
        signUp={signUp}
        hideAll={false}
      />
    <Hero signUp={signUp} />  

      <section
        className="bg-white flex flex-col items-center justify-center pt-20"
        id="features"
      >
        <FeaturesSection />
      </section>
      <AdvantagesSection />
      <Cta className="mt-20 mb-20" signUp={signUp} />
      <Footer />
    </div>
  );
};

export default Landing;
