'use client';

import { CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MovingBorderButton } from '@/components/ui/moving-border';

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50/80 to-purple-100/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/5 to-transparent" />
      
      <div className="max-w-2xl mx-auto p-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_-12px] shadow-purple-500/20 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-lg shadow-green-500/20 animate-pulse-slow">
              <CheckCircle2 className="w-14 h-14 text-green-500" strokeWidth={2} />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 text-transparent bg-clip-text mb-6">
              Thank You for Signing Up!
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
              We've received your information and will be in touch soon to show you how HeyWeekly can transform your newsletter workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MovingBorderButton
                borderRadius="0.75rem"
                className="relative bg-gradient-to-r from-primary to-primary/90 text-white flex items-center justify-center hover:from-primary/90 hover:to-primary transition-all duration-300"
                containerClassName="h-[60px] w-full sm:w-auto"
                borderClassName="opacity-20"
                duration={2500}
                onClick={() => router.push('/')}
              >
                <div className="px-8 py-4 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-lg font-semibold">Return to Home</span>
                </div>
              </MovingBorderButton>
            </div>
            
            <p className="mt-12 text-sm text-gray-500">
              If you have any questions, feel free to reach out to us at{' '}
              <a href="mailto:hey@heyweekly.com" className="text-primary hover:underline">
                hey@heyweekly.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;