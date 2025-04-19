import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  period?: string;
  isEnterprise?: boolean;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  ctaText,
  period,
  isEnterprise = false,
}: PricingCardProps) {
  return (
    <Card className="flex flex-col p-6 bg-white/95 backdrop-blur-sm border border-purple-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="mb-2">
          {isEnterprise ? (
            <span className="text-4xl font-bold text-purple-600">{price}</span>
          ) : (
            <>
              <span className="text-4xl font-bold text-purple-600">
                ${price}
              </span>
              {period && (
                <span className="text-gray-600 ml-2 text-sm">{period}</span>
              )}
            </>
          )}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button 
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium"
        variant="default"
      >
        {ctaText}
      </Button>
    </Card>
  );
}