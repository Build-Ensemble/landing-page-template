import React from 'react';
import { cn } from "@/lib/utils";

interface ProblemStatementProps {
  className?: string;
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ className }) => {
  return (
    <div className={cn("max-w-4xl mx-auto bg-gray-900 text-white py-20 px-8 rounded-2xl", className)}>
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Are You Missing Out on High-Value Leads?
        </h2>

        <div className="space-y-6 text-lg text-gray-300">
          <div className="space-y-4">
            <p className="leading-relaxed">
              <span className="text-white font-semibold">Writing newsletters consistently is hard.</span> Your time is better spent closing deals, not crafting content.
              <span className="text-white font-semibold"> But, without staying in touch, clients forget you</span> and your referrals dry up.
            </p>
          </div>
        
        <div className="flex justify-between items-center py-12 px-4">
          <div className="text-center space-y-3">
            <div className="text-5xl">👨‍💻</div>
            <div className="text-sm font-medium">4 hours to write<br />an email</div>
          </div>
          
          <div className="text-3xl text-gray-600">→</div>
          
          <div className="text-center space-y-3">
            <div className="text-5xl">😪</div>
            <div className="text-sm font-medium">Struggle to<br />find time</div>
          </div>
          
          <div className="text-3xl text-gray-600">→</div>
          
          <div className="text-center space-y-3">
            <div className="text-5xl">😔</div>
            <div className="text-sm font-medium">Stop<br /> After 3 months</div>
          </div>
        </div>


          
          <div className="mt-12 space-y-6">
            <h3 className="text-2xl font-bold text-white">The Missing Piece:</h3>
            <p className="text-xl leading-relaxed">
              What if your newsletter wrote itself - and actually got results?
            </p>
            <div className="space-y-4 text-lg">
              <p className="leading-relaxed">
                <span className="text-white font-semibold">HeyWeekly uses your voice</span> to write your newsletter.
                <br />
                <br />
                We track 
                <span className="text-white font-semibold"> engagement, nurture leads, and even provide real estate insights</span> to optimize your content.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
