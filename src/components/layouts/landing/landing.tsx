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
    question: "How accurate is the owner contact info?",
    answer: "We cross-reference multiple sources to deliver verified, enriched contacts — phone + email where possible.",
  },
  {
    question: "Who is this for?",
    answer: "Brokers and acquisition teams focused on closing off-market deals",
  },
  {
    question: "Can I customize by location or asset type?",
    answer: "Yes. We filter by borough, number of units, recent events, and more.",
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
  const getDemo = () => {
    router.push('/demo');
  };
  return (
    <div>
      {/* <div className="fixed w-[400px] md:w-screen top-12 z-10">
        <div className="relative w-full h-full">
          <div className="absolute top-4 right-3 w-[100px] md:w-screen h-[100px] md:h-screen">
            <FBXViewer />
          </div>
        </div>
      </div> */}
      <Navbar
        className="backdrop-blur-md fixed top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto"
        login={login}
        signUp={signUp}
        pricing={pricing}
        hideAll={false}
      />

      <Hero signUp={signUp}  getDemo={getDemo} />

      <ProblemStatement className="relative"  getDemo={getDemo} />

      <section className="bg-white flex flex-col items-center justify-center pt-20" id="features">
        <FeaturesSection />
      </section>

      {/* <AdvantagesSection /> */}
      <Cta className="mt-20 mb-20 z-10" signUp={signUp} getDemo={getDemo} />

      <section id="faq">
        <FAQ items={faqItems} className="z-20 relative" />
      </section>

      <Footer className="z-20 relative" />
    </div>
  );
};

export default Landing;