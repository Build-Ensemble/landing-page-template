import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { BadgeCheck } from 'lucide-react';

interface ProblemStatementProps {
  className?: string;
  getDemo?: () => void;  
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ className ,   getDemo}) => {
  return (
    <div className={cn("max-w-4xl mx-auto bg-[#1a1033] text-white py-20 px-8 rounded-2xl shadow-[0_0_50px_-12px] shadow-purple-500/30 z-20", className)}>
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold tracking-tight text-center bg-gradient-to-r from-purple-300 to-purple-100 text-transparent bg-clip-text">
          Are You Missing Out on High-Value Leads?
        </h2>

        <div className="space-y-6 text-lg text-purple-200/80">
          <div className="space-y-4">
            <p className="leading-relaxed">
              <span className="text-purple-100 font-semibold">Writing newsletters consistently is hard.</span> Your time is better spent closing deals, not crafting content.
              <span className="text-purple-100 font-semibold"> But, without staying in touch, clients forget you</span> and your referrals dry up.
            </p>
          </div>
        
        <div className="flex justify-between items-center py-12 px-4">
          <div className="text-center space-y-3">
            <div className="text-5xl">👨‍💻</div>
            <div className="text-sm font-medium text-purple-200">4 hours to write<br />an email</div>
          </div>
          
          <div className="text-3xl text-purple-700">→</div>
          
          <div className="text-center space-y-3">
            <div className="text-5xl">😪</div>
            <div className="text-sm font-medium text-purple-200">Struggle to<br />find time</div>
          </div>
          
          <div className="text-3xl text-purple-700">→</div>
          
          <div className="text-center space-y-3">
            <div className="text-5xl">😔</div>
            <div className="text-sm font-medium text-purple-200">Stop<br /> After 3 months</div>
          </div>
        </div>

          <div className="mt-12 space-y-6">
            <h3 className="text-2xl font-bold text-purple-100">The Missing Piece:</h3>
            <p className="text-xl leading-relaxed text-purple-100">
              What if your newsletter wrote itself - and actually got results?
            </p>
            <div className="space-y-4 text-lg">
              <p className="leading-relaxed">
                <span className="text-purple-100 font-semibold">Findre uses your voice</span> to write your newsletter.
                <br />
                <br />
                We track 
                <span className="text-purple-100 font-semibold"> engagement, nurture leads, and even provide real estate insights</span> to optimize your content.
                <br />
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="w-full flex justify-center mt-8">
        <Button
          variant="outline"
          className="border-white/30 hover:bg-white hover:text-[#1a1033] px-10 py-7 text-xl transition-all duration-300 select-none hover:scale-[1.02] w-full max-w-md text-purple-800"
          onClick={getDemo}

       >
          <BadgeCheck className="mr-3" size={24} strokeWidth={3} />{' '}
          Book a Demo
        </Button>
      </div>
    </div>
  );
};

export default ProblemStatement;
