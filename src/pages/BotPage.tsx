import React, { useState } from 'react';
import { Search, Bookmark, Filter } from 'lucide-react';

const BotPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    'Characters', 'Efficiency', 'Business', 'Image-based', 
    'Writing', 'Consultation', 'Games', 'Learning', 
    'Audio-based', 'Programming', 'Lifestyle', 'Video-based', 
    'Translation'
  ];
  
  const botCards = [
    {
      id: 1,
      title: 'Kaikun Wiki AI',
      avatar: '👾',
      provider: 'Kaikun AI',
      description: 'Kaikun virtual assistant provides accurate and reasonable responses, the ability to search online with updated information, links, and more.',
      model: 'GPT-4o',
      likes: 932,
      saves: 7,
      category: 'Consultation'
    },
    {
      id: 2,
      title: 'Kaikun Tax',
      avatar: '📊',
      provider: 'Kaikun AI',
      description: 'Tax assistant helping with tax filing and regulations.',
      model: 'GPT-4o',
      likes: 302,
      saves: 1,
      category: 'Learning'
    },
    {
      id: 3,
      title: 'Translate Vi-En',
      avatar: '🐸',
      provider: 'Kaikun AI',
      description: 'I am a translation and interpretation assistant between Vietnamese and English',
      model: 'GPT-4o',
      likes: 212,
      saves: 0,
      category: 'Translation'
    },
    {
      id: 4,
      title: 'Kaikun GPT',
      avatar: '🤖',
      provider: 'Kaikun AI',
      description: 'I am an assistant capable of helping you answer everything concisely.',
      model: 'GPT-4o',
      likes: 430,
      saves: 2,
      category: 'Consultation'
    }
  ];

  return (
    <div className="container mx-auto">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for bots..."
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-6">
          {['All', 'GPTs', 'COZEs', 'Saved'].map((tab) => (
            <button
              key={tab}
              className={`pb-3 px-1 ${
                activeTab === tab.toLowerCase() 
                  ? 'border-b-2 border-blue-600 text-blue-600 font-medium' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          <button 
            className={`px-4 py-1.5 rounded-full text-sm ${
              activeCategory === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
                activeCategory === category.toLowerCase() 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Bot Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {botCards.map((bot) => (
          <div 
            key={bot.id} 
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg text-2xl">
                    {bot.avatar}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">{bot.title}</h3>
                    <p className="text-sm text-gray-500">@{bot.provider}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-blue-500">
                  <Bookmark size={18} />
                </button>
              </div>
              
              <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                {bot.description}
              </p>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                  {bot.model}
                </span>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <span>👍</span>
                    <span className="ml-1">{bot.likes}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>❤️</span>
                    <span className="ml-1">{bot.saves}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs">
                  {bot.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotPage;