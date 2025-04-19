import React from 'react';
import {
  FileText,
  Zap,
  Database,
  Globe,
  Lock,
  BarChart,
  Sheet,
  File,
  Files,
  Check,
} from 'lucide-react';

const features = [
  {
    icon: <Files className="h-8 w-8 text-primary" />,
    title: 'Multi-Document Support',
    description:
      'Process invoices, receipts, bank statements, tax forms, and more in any format (Images, PDFs, etc).',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: '99.7% Accuracy',
    description:
      'Our AI models deliver industry-leading accuracy, significantly reducing errors and exceptions.',
  },
  {
    icon: <Sheet className="h-8 w-8 text-primary" />,
    title: 'QBO, Xero, Caseware, and more',
    description:
      'Get clean, structured CSV data ready to use in QBO, Xero, Caseware, and other accounting software.',
  },
  {
    icon: <File className="h-8 w-8 text-primary" />,
    title: 'Automatic Document Splitting',
    description: 'Automatically split different documents in a single image.',
  },
  {
    icon: <Check className="h-8 w-8 text-primary" />,
    title: 'Self-Balance Verification',
    description:
      'The AI model verifies if its extracted transactions balance and self-corrects if needed.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Best-in-Class Support',
    description:
      'Dedicated on-demand support agent with 24/7 availability, 5 minute response time.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Streamlined Financial Document Processing
          </h2>
          <p className="text-lg text-gray-600">
            Ensemble leverages cutting-edge AI technology to automate and
            simplify your financial document workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 inline-block bg-blue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
