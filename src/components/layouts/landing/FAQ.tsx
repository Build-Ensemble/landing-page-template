import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 pt-16">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left side - Header section */}
          <div className="w-full md:w-3/5 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h1>
            <h2 className="text-lg text-gray-600">
              Have questions? We're here to help. <br className="hidden md:block" />
              You can email us at ensemble@outlook.com or try our live chat. We are here to assist you.
            </h2>
          </div>
          
          {/* Right side - FAQ items */}
          <div className="w-full md:w-2/5">
            <div className={cn("w-full", className)}>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group rounded-lg border border-purple-100 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="flex w-full items-center justify-between p-4 text-left"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#9b87f5]">
                        {item.question}
                      </h3>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-[#9b87f5] transition-transform duration-200",
                          openIndex === index ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-200",
                        openIndex === index
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-50 to-white p-4 text-gray-600">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}