import React from 'react';
import { Check } from 'lucide-react';

const FindreSection = () => {
  return (
    <section id="advantages" className="py-20 bg-accent">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Findre Over DocuClipper
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Findre is purpose-built for accountants, with a focus on
                financial document understanding and integration.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-green-100 rounded-full mr-3">
                    <Check className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Native Editor</h3>
                    <p className="text-gray-600">
                      Instead of editing from Excel, we built a native editor
                      that allows you to seemlessly edit your data directly in
                      the app.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-green-100 rounded-full mr-3">
                    <Check className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Dedicated Support Team
                    </h3>
                    <p className="text-gray-600">
                      Get responses in hours, not days, from finance and
                      technical experts who understand your business needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-green-100 rounded-full mr-3">
                    <Check className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      AI-based, not OCR-based
                    </h3>
                    <p className="text-gray-600">
                      Our advanced AI technology enables more sophisticated
                      automation workflows and higher accuracy compared to
                      traditional OCR solutions. Our system verifies data
                      against financial logic for superior results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4 z-50">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Comparison with DocuClipper
                  </h3>
                  <p className="text-gray-600">
                    See how Findre stacks up against other document extraction
                    solutions
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 font-medium text-gray-600">
                          Features
                        </th>
                        <th className="text-center py-3 font-medium text-primary">
                          Findre
                        </th>
                        <th className="text-center py-3 font-medium text-gray-600">
                          DocuClipper
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-200">
                        <td className="py-3 text-gray-800">
                          Financial Document Accuracy
                        </td>
                        <td className="py-3 text-center text-secondary font-medium">
                          99.7%
                        </td>
                        <td className="py-3 text-center text-gray-600">
                          90-95%
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-3 text-gray-800">Processing Speed</td>
                        <td className="py-3 text-center text-secondary font-medium">
                          15-30 seconds
                        </td>
                        <td className="py-3 text-center text-gray-600">
                          10-20 seconds
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-3 text-gray-800">Integration Time</td>
                        <td className="py-3 text-center text-secondary font-medium">
                          Minutes
                        </td>
                        <td className="py-3 text-center text-gray-600">
                          Days/Weeks
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-3 text-gray-800">Support</td>
                        <td className="py-3 text-center text-secondary font-medium">
                          On-demand (&lt;5 minutes)
                        </td>
                        <td className="py-3 text-center text-gray-600">
                          Days/Weeks
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 text-gray-800">
                          Custom Field Training
                        </td>
                        <td className="py-3 text-center text-secondary font-medium">
                          Built-in
                        </td>
                        <td className="py-3 text-center text-gray-600">
                          Add-on cost
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindreSection;
