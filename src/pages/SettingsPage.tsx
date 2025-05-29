import React from 'react';
import { User, Bell, Lock, Globe, CreditCard, HelpCircle, Mail, Phone } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const settingsSections = [
    {
      title: 'Account',
      icon: <User size={20} />,
      items: [
        { label: 'Profile Information', description: 'Update your personal details' },
        { label: 'Email Settings', description: 'Manage your email preferences' },
        { label: 'Password', description: 'Change your password' }
      ]
    },
    {
      title: 'Notifications',
      icon: <Bell size={20} />,
      items: [
        { label: 'Push Notifications', description: 'Control mobile notifications' },
        { label: 'Email Notifications', description: 'Manage email alerts' }
      ]
    },
    {
      title: 'Privacy',
      icon: <Lock size={20} />,
      items: [
        { label: 'Privacy Settings', description: 'Control your privacy preferences' },
        { label: 'Data Usage', description: 'Manage how your data is used' }
      ]
    },
    {
      title: 'Language',
      icon: <Globe size={20} />,
      items: [
        { label: 'Display Language', description: 'Choose your preferred language' },
        { label: 'Region', description: 'Set your location preferences' }
      ]
    },
    {
      title: 'Billing',
      icon: <CreditCard size={20} />,
      items: [
        { label: 'Payment Methods', description: 'Manage your payment options' },
        { label: 'Subscription', description: 'View and modify your subscription' },
        { label: 'Billing History', description: 'View past transactions' }
      ]
    }
  ];

  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>

        <div className="space-y-6">
          {settingsSections.map((section) => (
            <div key={section.title} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">{section.icon}</span>
                  <h2 className="text-lg font-medium">{section.title}</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{item.label}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help & Support */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <HelpCircle size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-blue-900">Need help with settings?</h3>
              <p className="text-blue-700 mt-1">Our support team is here to assist you</p>
              <div className="mt-4 flex space-x-4">
                <button className="flex items-center text-blue-700 hover:text-blue-800">
                  <Mail size={16} className="mr-1" />
                  <span>Email Support</span>
                </button>
                <button className="flex items-center text-blue-700 hover:text-blue-800">
                  <Phone size={16} className="mr-1" />
                  <span>Call Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;