'use client';

import { Navbar } from "@/components/layouts/landing/Navbar";
import { PricingCard } from "@/components/layouts/landing/PricingCard";
import { Building } from "lucide-react";

const Pricing = () => {
  const pricingData = [
    {
      title: "Individual Agent",
      price: "29",
      period: "per month / billed monthly",
      description: "Perfect for independent real estate agents",
      features: [
        { text: "Up to 10 property listings" },
        { text: "Basic property analytics" },
        { text: "Email lead notifications" },
        { text: "Property photo gallery" },
        { text: "Basic CRM features" },
        { text: "Mobile-friendly listings" },
        { text: "Standard support" }
      ],
      ctaText: "Start Free Trial"
    },
    {
      title: "Real Estate Team",
      price: "99",
      period: "per month / billed yearly",
      description: "Ideal for growing real estate teams",
      features: [
        { text: "Unlimited property listings" },
        { text: "Advanced market analytics" },
        { text: "Team collaboration tools" },
        { text: "Virtual tour integration" },
        { text: "Advanced CRM with automation" },
        { text: "Custom branding options" },
        { text: "Priority support" }
      ],
      ctaText: "Contact Sales"
    },
    {
      title: "Brokerage",
      price: "Custom",
      description: "For established brokerages and enterprises",
      features: [
        { text: "Multi-branch management" },
        { text: "Custom API integration" },
        { text: "White-label solution" },
        { text: "Advanced reporting suite" },
        { text: "Dedicated account manager" },
        { text: "Training & onboarding" }
      ],
      ctaText: "Talk to an Expert",
      isEnterprise: true
    }
  ];

  return (
    <>
       <Navbar
            className="backdrop-blur-md fixed top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto"
            hideAll={false}
            login={() => {}}
            signUp={() => {}}
            pricing={() => {}}
          />
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Building className="h-16 w-16 mx-auto mb-6 text-purple-600" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Property Management Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your real estate business growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="text-center mt-16 text-gray-600">
          Trusted by thousands of real estate professionals across the country
        </div>
      </div>
    </div>
    </>
  );
};

export default Pricing;