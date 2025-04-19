'use client';

import { Navbar } from '@/components/layouts/landing/Navbar';
import { Cta } from '@/components/layouts/landing/Cta';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/layouts/landing/Footer';
import FeaturesSection from '@/components/layouts/landing/Features';
import AdvantagesSection from './AdvantagesSection';
import Hero from './Hero';


import { FAQ } from "@/components/layouts/landing/FAQ";

const faqItems = [
  {
    question: "How easy is it to setup?",
    answer: "Our platform is designed for easy setup. You can be up and running in minutes with our guided onboarding process and intuitive interface.",
  },
  {
    question: "Can you GUARANTEE increased revenue?",
    answer: "While we can't guarantee specific revenue increases, our AI-powered platform has helped businesses achieve 99.7% accuracy in data extraction and reduce processing time by 80%.",
  },
  {
    question: "Who is this product built for?",
    answer: "Our product is built for businesses handling financial documents, including accountants, financial advisors, and companies looking to automate their document processing workflows.",
  },
  {
    question: "Do you have a refund policy?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not completely satisfied with our service.",
  },
  {
    question: "Who is the team behind this?",
    answer: "We're a team of experienced professionals in AI, financial technology, and data processing, committed to simplifying financial document workflows.",
  },
];

const Landing = () => {
  const router = useRouter();

  const login = () => {
    router.push('/admin/login');
  };

  const signUp = () => {
    router.push('/admin/register');
  };
  const pricing = () => {
    console.log('Navigating to pricing page');

    router.push('/pricing');
  };
 

  return (
    <div className="">
      <Navbar
        className="backdrop-blur-md fixed top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto"
        login={login}
        signUp={signUp}
        pricing={pricing}
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
      <section
        id="faq"
      >
      <FAQ items={faqItems}  />
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
