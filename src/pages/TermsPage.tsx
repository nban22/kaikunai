import React from 'react';
import { Shield, Check } from 'lucide-react';

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Terms of Service',
      content: [
        'Welcome to Kaikun AI',
        'By accessing our service, you agree to these terms',
        'Our service is provided "as is" without warranties',
        'We reserve the right to modify these terms at any time'
      ]
    },
    {
      title: 'Privacy Policy',
      content: [
        'We collect and process your data to provide our services',
        'Your data is protected using industry-standard security measures',
        'We do not sell your personal information to third parties',
        'You can request your data or its deletion at any time'
      ]
    },
    {
      title: 'Usage Guidelines',
      content: [
        'Use our service responsibly and legally',
        'Do not attempt to reverse engineer our systems',
        'Respect other users and their privacy',
        'Report any violations or concerns'
      ]
    }
  ];

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 mb-8 text-white">
        <div className="flex items-center mb-4">
          <Shield size={24} className="mr-2" />
          <h1 className="text-2xl font-bold">Legal & Terms</h1>
        </div>
        <p className="text-blue-100">
          Last updated: May 29, 2025
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <div className="space-y-3">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-600">
          If you have any questions about our terms, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;