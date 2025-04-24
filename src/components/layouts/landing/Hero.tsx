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
    src:"/headshots/headshot_1.png", 
    alt: "John", 
    fallback: "J" 
  },
  { 
    src: "/headshots/headshot_2.png", 
    alt: "Brianna", 
    fallback: "B" 
  },
  { 
    src: "/headshots/headshot_3.png", 
    alt: "Jamie", 
    fallback: "J" 
  }
]

const HeroSection = ({
  signUp,
  getDemo
}: {
  signUp: () => void;
  getDemo: () => void;

  
}) => {
  return (
    <section className="relative pt-20 md:pt-40 pb-20 md:pb-40 overflow-visible bg-gradient-to-b from-accent to-white min-h-[60vh] flex items-center">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-secondary/30 rounded-full blur-[120px]"></div>
      
      <div className="container px-4 mx-auto relative max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Main heading - much larger */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl z-20 relative">
          Get in Front of Distressed Property Owners Before Anyone Else
          </h1>
          
          {/* Subheading - centered */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto z-20 relative">
          Built for brokers and investors who win by getting in first.
Filter multifamily assets by ownership signals and connect directly with decision-makers—before the market sees the deal.
          </p>
                {/* Rating component - centered */}
          <div className="mb-4 z-20">
            <Rating avatars={avatars} className="mx-auto" />
          </div>
          
          
          {/* Buttons - centered and larger */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center items-center z-20">
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
              className="border-primary text-primary hover:bg-primary hover:text-white px-10 py-7 text-xl z-20"
              onClick={getDemo}

            >
              <BadgeCheck className="mr-3" size={24} strokeWidth={3} />{' '}
              <p>Get a FREE consultation</p>
            </Button>
          </div>
          

          {/* Feature bullets - centered */}
          <div className="flex flex-col md:flex-row gap-6 justify-center z-20">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-secondary mr-2" />
              <span className="text-base font-medium">Pre-order now</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-secondary mr-2" />
              <span className="text-base font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-secondary mr-2" />
              <span className="text-base font-medium">
                free sample
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;