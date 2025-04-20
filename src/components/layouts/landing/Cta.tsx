'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Rating } from "@/components/layouts/landing/rating"
import { MovingBorderButton } from '@/components/ui/moving-border';
import { SparklesIcon } from "lucide-react"
import { BadgeCheck } from "lucide-react"

export const Cta = ({
  className,
  signUp,
}: {
  className: string;
  signUp: () => void;
}) => {
  const router = useRouter();
  return (
    <section className={cn(
      "max-w-6xl mx-auto bg-gradient-to-b from-purple-50/80 to-purple-100/50 text-white py-24 px-8 rounded-3xl shadow-[0_0_50px_-12px] shadow-purple-500/20 z-20 relative overflow-hidden",
      "before:absolute before:inset-0 before:bg-gradient-to-b before:from-purple-500/5 before:to-transparent before:pointer-events-none",
      className
    )}>
      <div className="max-w-5xl mx-auto">
        <Card className={cn(
          'bg-gradient-to-br from-[#1a1033]/95 to-[#1a1033]/90 backdrop-blur-xl border-purple-900/20 shadow-xl p-12 relative overflow-hidden',
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:to-transparent before:pointer-events-none",
          className
        )}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title */}
            <div className="flex flex-col gap-6">
              <CardHeader className="p-0">
                <CardTitle className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-white to-white/90 text-transparent bg-clip-text select-text">
                  Ready to Up Your Newsletter Game?
                </CardTitle>
              </CardHeader>
              <p className="text-white/80 text-lg">Transform your accounting firm with AI-powered automation</p>
            </div>

            {/* Right Column - Buttons */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <MovingBorderButton
                  borderRadius="0.75rem"
                  className="relative bg-gradient-to-r from-primary to-primary/90 text-white flex items-center justify-center hover:from-primary/90 hover:to-primary transition-all duration-300"
                  containerClassName="h-[74px] w-full"
                  borderClassName="opacity-20"
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
                  className="border-white/30 text-purple-800 hover:bg-white hover:text-[#1a1033] px-10 py-7 text-xl transition-all duration-300 select-none hover:scale-[1.02] w-full"
                >
                  <BadgeCheck className="mr-3" size={24} strokeWidth={3} />{' '}
                  <p>Book a Demo</p>
                </Button>
              </div>
              <p className="text-sm text-white/80 select-text font-medium text-center">No credit card required • 14-day free trial</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
