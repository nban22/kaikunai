import React, { useState } from 'react';
import { Search, Users, MessageSquare, ThumbsUp, Share2, Filter } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah Chen',
        avatar: 'S',
        handle: '@sarahchen'
      },
      content: 'Just created this amazing landscape using Stable Diffusion! What do you think?',
      image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg',
      likes: 423,
      comments: 89,
      shares: 32,
      time: '2 hours ago',
      category: 'Stable Diffusion'
    },
    {
      id: 2,
      user: {
        name: 'Alex Morgan',
        avatar: 'A',
        handle: '@alexmorgan'
      },
      content: 'Check out this AI-powered chatbot I built using Kaikun AI!',
      likes: 256,
      comments: 45,
      shares: 12,
      time: '4 hours ago',
      category: 'Chatbot'
    }
  ];

  const categories = [
    'All', 'Stable Diffusion', 'Chatbot', 'Voice AI', 
    'Image Generation', 'Code', 'Writing', 'Translation'
  ];

  return (
    <div className="container mx-auto">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search community posts..."
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-6">
          {['Trending', 'Latest', 'Following', 'My Posts'].map((tab) => (
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
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === category.toLowerCase()
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4">
              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                  {post.user.avatar}
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">{post.user.name}</h3>
                  <p className="text-sm text-gray-500">{post.user.handle} · {post.time}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-800 mb-4">{post.content}</p>

              {/* Image if exists */}
              {post.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img src={post.image} alt="Post" className="w-full h-64 object-cover" />
                </div>
              )}

              {/* Category Tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {post.category}
                </span>
              </div>

              {/* Interaction Buttons */}
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-2 hover:text-blue-600">
                  <ThumbsUp size={18} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-600">
                  <MessageSquare size={18} />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-600">
                  <Share2 size={18} />
                  <span>{post.shares}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;