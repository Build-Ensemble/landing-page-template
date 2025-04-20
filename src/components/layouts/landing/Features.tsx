import React from 'react';
import {
  Building2,
  LineChart,
  Store,
  Home,
  Newspaper,
  Trophy,
  BarChart,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "Events",
    description:
      'Showcase local weekend events, community gatherings, and neighborhood activities that matter to your clients.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: 'Monthly Market Stats',
    description:
      "Previous month's housing statistics, price trends, and market analysis - automatically compiled and explained.",
  },
  {
    icon: <Store className="h-8 w-8 text-primary" />,
    title: 'Local Business Spotlight',
    description:
      'Highlight new and notable businesses in your area, keeping your newsletter locally relevant and engaging.',
  },
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: 'Featured Listing',
    description: 'Showcase your best listing of the week or month with professional descriptions and key highlights.',
  },
  {
    icon: <Newspaper className="h-8 w-8 text-primary" />,
    title: 'National RE News',
    description:
      'Curated national real estate news and trends that impact your local market, explained in simple terms.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Market Insights',
    description:
      'Eye-catching infographics and reports that break down complex market data into digestible insights.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Complete Newsletter, Automated
          </h2>
          <p className="text-lg text-gray-600">
            Every piece of content you need, written in your voice and personalized for your market.
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
