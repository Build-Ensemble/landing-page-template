'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQProps {
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ className }) => {
  const { language } = useLanguage();
  const t = getTranslations(language).faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn("py-20 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t.title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;