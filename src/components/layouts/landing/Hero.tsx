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
import { toast } from 'sonner';
import { Rating } from "@/components/layouts/landing/rating"

const avatars = [
  { 
    src: "/public/lovable-uploads/c31431e0-bcfc-4039-a271-e2d436830d6a.png", 
    alt: "Avatar 1", 
    fallback: "A1" 
  },
  { 
    src: "/public/lovable-uploads/c31431e0-bcfc-4039-a271-e2d436830d6a.png", 
    alt: "Avatar 2", 
    fallback: "A2" 
  },
  { 
    src: "/public/lovable-uploads/c31431e0-bcfc-4039-a271-e2d436830d6a.png", 
    alt: "Avatar 3", 
    fallback: "A3" 
  }
]

const HeroSection = ({
  signUp,
}: {
  signUp: () => void;
}) => {
  


  return (
    <section className="relative pt-20 md:pt-40 pb-8 overflow-visible bg-gradient-to-b from-accent to-white">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-circle"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary rounded-full blur-circle"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Financial Data Extraction Workflows, Powered by AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Our AI-powered platform extracts data from financial documents
              with 99.7% accuracy, saving you 80% of processing time and
              eliminating manual data entry.
            </p>
            <div className="flex flex-wrap gap-3 mb-12 justify-start items-center">
              <MovingBorderButton
                borderRadius="0.5rem"
                className="relative bg-primary/90 text-white flex items-center justify-center hover:bg-primary/95"
                containerClassName="h-[74px] w-auto"
                // borderClassName="bg-[radial-gradient(#6b7280_0%,#4b5563_40%,transparent_90%)] opacity-20 border-2 border-white"
                borderClassName="bg-white opacity-20 border-2 border-white"
                duration={2500}
                onClick={signUp}
              >
                <div className="px-8 py-5 flex items-center w-full justify-center gap-2">
                  <SparklesIcon className="mr-3" size={20} strokeWidth={2.5} />
                  <span className="text-lg font-semibold tracking-wide">
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
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
              >
                <BadgeCheck className="mr-2" size={24} strokeWidth={3} />{' '}
                <p>Get a FREE consultation</p>
              </Button>
              <Rating avatars={avatars} />

            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                <span className="text-sm font-medium">free BETA access</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-secondary mr-2" />
                <span className="text-sm font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                <span className="text-sm font-medium">
                  No credit card required
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
