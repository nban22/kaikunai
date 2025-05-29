import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Bot, Mic, Image as ImageIcon, Grid, Users } from 'lucide-react';
import { KaikunLogo } from '../components/icons/KaikunLogo';

const HomePage: React.FC = () => {
  const features = [
    {
      title: 'AI Chat',
      description: 'Chat with advanced AI models and get help with any task',
      icon: <MessageCircle size={24} />,
      color: 'bg-blue-100 text-blue-600',
      path: '/chat'
    },
    {
      title: 'AI Bot',
      description: 'Discover and use specialized AI bots for different tasks',
      icon: <Bot size={24} />,
      color: 'bg-green-100 text-green-600',
      path: '/bot'
    },
    {
      title: 'AI Talk',
      description: 'Have natural voice conversations with AI assistants',
      icon: <Mic size={24} />,
      color: 'bg-purple-100 text-purple-600',
      path: '/talk'
    },
    {
      title: 'AI Images',
      description: 'Generate beautiful images with text prompts',
      icon: <ImageIcon size={24} />,
      color: 'bg-orange-100 text-orange-600',
      path: '/images'
    },
    {
      title: 'Stable Diffusion',
      description: 'Create high-quality images with advanced models',
      icon: <Grid size={24} />,
      color: 'bg-pink-100 text-pink-600',
      path: '/diffusion'
    },
    {
      title: 'AI Community',
      description: 'Connect with other AI enthusiasts and share resources',
      icon: <Users size={24} />,
      color: 'bg-yellow-100 text-yellow-600',
      path: '/community'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <KaikunLogo className="w-20 h-20" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Kaikun AI</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your all-in-one AI platform for chat, image generation, voice interactions, and more
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.path}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className={`${feature.color} p-3 rounded-full w-fit mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Upgrade to Pro</h2>
            <p className="text-blue-100 max-w-md">
              Get unlimited access to all AI models, higher usage limits, and priority support
            </p>
          </div>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
            View Pro Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;