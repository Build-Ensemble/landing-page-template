import React from 'react';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  SparklesIcon,
  BadgeCheck,
  Clock,
} from 'lucide-react';

import '@/app/globals.css';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { Rating } from "@/components/layouts/landing/rating";

const avatars = [
  { 
    src: "Screenshot_1.png", 
    alt: "Avatar 3", 
    fallback: "A3" 
  },
  { 
    src: "Screenshot_2.png", 
    alt: "Avatar 2", 
    fallback: "A2" 
  },
  { 
    src: "Screenshot_4.png", 
    alt: "Avatar 1", 
    fallback: "A1" 
  }
]

const HeroSection = ({
  signUp,
}: {
  signUp: () => void;
}) => {
  return (
    <section className="relative pt-12 md:pt-16 overflow-visible bg-gradient-to-b from-accent to-white min-h-[80vh] flex items-center">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-secondary/30 rounded-full blur-[120px]"></div>
      
      <div className="container px-4 mx-auto relative z-10 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Main heading - much larger */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl">
            Financial Data Extraction Workflows, Powered by AI
          </h1>
          
          {/* Subheading - centered */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Our AI-powered platform extracts data from financial documents
            with 99.7% accuracy, saving you 80% of processing time and
            eliminating manual data entry.
          </p>
          
          {/* Buttons - centered and larger */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center items-center">
            <MovingBorderButton
              borderRadius="0.5rem"
              className="relative bg-primary/90 text-white flex items-center justify-center hover:bg-primary/95"
              containerClassName="h-[74px] w-auto"
              borderClassName="bg-white opacity-20 border-2 border-white"
              duration={2500}
              onClick={signUp}
            >
              <div className="px-10 py-6 flex items-center w-full justify-center gap-2">
                <SparklesIcon className="mr-3" size={22} strokeWidth={2.5} />
                <span className="text-xl font-semibold tracking-wide">
                  Sign up
                </span>
                <span className="text-sm font-bold ml-1.5 opacity-80">
                  {' '}
                  - it's free
                </span>
              </div>
            </MovingBorderButton>
            
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-10 py-7 text-xl"
            >
              <BadgeCheck className="mr-3" size={24} strokeWidth={3} />{' '}
              <p>Get a FREE consultation</p>
            </Button>
          </div>
          
          {/* Rating component - centered */}
          <div className="mb-12">
            <Rating avatars={avatars} className="mx-auto" />
          </div>
          
          {/* Feature bullets - centered */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-secondary mr-2" />
              <span className="text-base font-medium">Free BETA access</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-secondary mr-2" />
              <span className="text-base font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-secondary mr-2" />
              <span className="text-base font-medium">
                No credit card required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;