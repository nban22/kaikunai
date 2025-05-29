import React from 'react';
import { Shield, Zap, Globe, Users, Award, Heart } from 'lucide-react';
import { KaikunLogo } from '../components/icons/KaikunLogo';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="text-blue-600" size={24} />,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security'
    },
    {
      icon: <Zap className="text-orange-600" size={24} />,
      title: 'Lightning Fast',
      description: 'Powered by cutting-edge AI technology for rapid responses'
    },
    {
      icon: <Globe className="text-green-600" size={24} />,
      title: 'Global Reach',
      description: 'Supporting multiple languages and regions worldwide'
    },
    {
      icon: <Users className="text-purple-600" size={24} />,
      title: 'Community Driven',
      description: 'Built with and for our amazing community of users'
    },
    {
      icon: <Award className="text-yellow-600" size={24} />,
      title: 'Award Winning',
      description: 'Recognized for excellence in AI innovation'
    },
    {
      icon: <Heart className="text-red-600" size={24} />,
      title: 'User Focused',
      description: 'Designed with user experience at the core'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '1M+' },
    { label: 'Countries', value: '150+' },
    { label: 'AI Models', value: '20+' },
    { label: 'Daily Interactions', value: '5M+' }
  ];

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <KaikunLogo className="w-24 h-24" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Kaikun AI</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering creativity and productivity through advanced artificial intelligence
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            To democratize artificial intelligence and make advanced AI tools accessible to everyone,
            fostering innovation and creativity across the globe.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-medium">Team Member {member}</h3>
              <p className="text-sm text-gray-500">Position</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions or want to learn more about Kaikun AI?
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutPage;