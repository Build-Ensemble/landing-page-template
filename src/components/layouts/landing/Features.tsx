'use client';

import React from 'react';
import {
  Building2,
  Contact2,
  LocateIcon,
  EyeIcon,
  BadgeCheck,
  Bell,
  Map
} from 'lucide-react';
import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [
  <Map className="h-8 w-8 text-primary" />,
  <Contact2 className="h-8 w-8 text-primary" />,
  <Building2 className="h-8 w-8 text-primary" />,
  <Bell className="h-8 w-8 text-primary" />,
  <EyeIcon className="h-8 w-8 text-primary" />,
  <BadgeCheck className="h-8 w-8 text-primary" />
];

const FeaturesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslations(language).features;

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto z-20 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 z-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 z-20">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 z-20">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow z-50"
            >
              <div className="mb-4 p-3 inline-block bg-blue-50 rounded-lg">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
