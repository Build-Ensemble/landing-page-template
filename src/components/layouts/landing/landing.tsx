'use client';

import { Navbar } from '@/components/layouts/landing/Navbar';
import { Cta } from '@/components/layouts/landing/Cta';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/layouts/landing/Footer';
import FeaturesSection from '@/components/layouts/landing/Features';
import AdvantagesSection from './AdvantagesSection';
import Hero from './Hero';
import { useState, useEffect, useRef } from 'react';
import { FAQ } from "@/components/layouts/landing/FAQ";
import FBXViewer from './FBXViewer';
import ProblemStatement from './ProblemStatement';

const faqItems = [
  {
    question: "How easy is it to setup?",
    answer: "Our platform is designed for easy setup. You can be up and running in minutes with our guided onboarding process and intuitive interface.",
  },
  {
    question: "Do you have a refund policy?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not completely satisfied with our service.",
  },
  {
    question: "How do I track my newsletter's performance?",
    answer: "You can track your newsletter's performance by using our analytics dashboard. You can see how many people opened your newsletter, clicked on links, and more.",
  },
  {
    question: "How do you get my local real estate market insights?",
    answer: "We use a combination of local events, news, and market trends to provide you with the most accurate and up-to-date insights.",
  },
  {
    question: "Who is the team behind this?",
    answer: "We're a team of experienced professionals in AI, real estate, and newsletter writing, committed to simplifying real estate newsletter workflows.",
  },
];

const Landing = () => {
  const router = useRouter();
  const login = () => router.push('/login');
  const signUp = () => router.push('/sign-up');
  const pricing = () => router.push('/pricing');

  return (
    <div>
      <div className="fixed w-[400px] md:w-screen top-12 z-10">
        <div className="relative w-full h-full">
          <div className="absolute top-4 right-3 w-[100px] md:w-screen h-[100px] md:h-screen">
            <FBXViewer />
          </div>
        </div>
      </div>
      <Navbar
        className="backdrop-blur-md fixed top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto"
        login={login}
        signUp={signUp}
        pricing={pricing}
        hideAll={false}
      />

      <Hero signUp={signUp} />
      <div className="h-[100px] md:h-[250px]">
      </div>

      <ProblemStatement className="relative" />

      <section className="bg-white flex flex-col items-center justify-center pt-20" id="features">
        <FeaturesSection />
      </section>

      {/* <AdvantagesSection /> */}
      <Cta className="mt-20 mb-20 z-10" signUp={signUp} />

      <section id="faq">
        <FAQ items={faqItems} className="z-20 relative" />
      </section>

      <Footer className="z-20 relative" />
    </div>
  );
};

export default Landing;