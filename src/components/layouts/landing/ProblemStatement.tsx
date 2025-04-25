'use client';

import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { BadgeCheck } from 'lucide-react';
import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProblemStatementProps {
  className?: string;
  getDemo?: () => void;
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ className, getDemo }) => {
  const { language } = useLanguage();
  const t = getTranslations(language).problemStatement;

  return (
    <div className={cn("max-w-4xl mx-auto bg-[#1a1033] text-white py-20 px-8 rounded-2xl shadow-[0_0_50px_-12px] shadow-purple-500/30 z-20", className)}>
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold tracking-tight text-center bg-gradient-to-r from-purple-300 to-purple-100 text-transparent bg-clip-text">
          {t.title}
        </h2>

        <div className="space-y-6 text-lg text-purple-200/80">
          <div className="space-y-4">
            <p className="leading-relaxed">
              <span className="text-purple-100 font-semibold">{t.intro.firstPart}</span> {t.intro.secondPart}
              <br /><br />
              <span className="text-purple-100 font-semibold">{t.intro.thirdPart}</span> {t.intro.fourthPart}
            </p>
          </div>

          <div className="flex justify-between items-center py-12 px-4">
            <div className="text-center space-y-3">
              <div className="text-5xl">{t.painPoints.research.icon}</div>
              <div className="text-sm font-medium text-purple-200 whitespace-pre-line">{t.painPoints.research.text}</div>
            </div>
            
            <div className="text-3xl text-purple-700">→</div>
            
            <div className="text-center space-y-3">
              <div className="text-5xl">{t.painPoints.calls.icon}</div>
              <div className="text-sm font-medium text-purple-200 whitespace-pre-line">{t.painPoints.calls.text}</div>
            </div>
            
            <div className="text-3xl text-purple-700">→</div>
            
            <div className="text-center space-y-3">
              <div className="text-5xl">{t.painPoints.opportunities.icon}</div>
              <div className="text-sm font-medium text-purple-200 whitespace-pre-line">{t.painPoints.opportunities.text}</div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <h3 className="text-2xl font-bold text-purple-100">{t.solution.title}</h3>
            <p className="text-xl leading-relaxed text-purple-100">
              {t.solution.subtitle}
            </p>
            <div className="space-y-4 text-lg">
              <p className="leading-relaxed">
                <span className="text-purple-100 font-semibold">{t.solution.description.firstPart}</span>
                <br /><br />
                <span className="text-purple-100 font-semibold">{t.solution.description.secondPart}</span> {t.solution.description.thirdPart}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8">
        <Button
          variant="outline"
          className="text-lg border-white/30 hover:bg-white hover:text-[#1a1033] px-10 py-7 md:text-xl transition-all duration-300 select-none hover:scale-[1.02] w-full max-w-md text-purple-800"
          onClick={getDemo}
        >
          <BadgeCheck className="mr-3" size={24} strokeWidth={3} />{' '}
          {t.cta}
        </Button>
      </div>
    </div>
  );
};

export default ProblemStatement;
