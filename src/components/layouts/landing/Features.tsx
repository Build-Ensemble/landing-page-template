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

const features = [
  {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: "See Who Owns What",
    description:
      'Stop guessing. We show you who owns each commercial property — whether it’s a person, company, or trust.',
  },
  {
    icon: <Contact2 className="h-8 w-8 text-primary" />,
    title: 'Get Verified Contacts',
    description:
      'No more dead-end numbers or digging through old directories. We give you the phone numbers and emails that actually work.',
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: 'Spot Properties That May Be for Sale',
    description:
      'We track signs like ownership changes and mortgage activity to help you find buildings before they hit the market.',
  },
  {
    icon: <Bell className="h-8 w-8 text-primary" />,
    title: 'Stay Notified When Things Change',
    description:
      'We keep an eye on your target properties and notify you when there’s a shift — like a new owner or updated info.',
  },
  {
    icon: <EyeIcon className="h-8 w-8 text-primary" />,
    title: 'Save Hours Every Week',
    description:
      'No more manual searching or data entry. We handle the research so you can focus on closing deals.',
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: 'Built for Dealmakers',
    description:
      'Everything is designed for brokers and acquisition teams who want better data, faster outreach, and less busywork.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto z-20 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 z-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 z-20">
            Get in Front of Owners Before Anyone Else
          </h2>
          <p className="text-lg text-gray-600 z-20">
            We help you spot opportunities and connect with the right people—without spending hours on Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow z-50"
            >
              <div className="mb-4 p-3 inline-block bg-blue-50 rounded-lg">
                {feature.icon}
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
