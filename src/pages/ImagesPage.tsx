import React, { useState } from 'react';
import { ChevronLeft, Image, Plus, RefreshCw, Download, Share2, ThumbsUp, Settings, Sliders } from 'lucide-react';

const ImagesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('flux-pro');
  const [prompt, setPrompt] = useState('');
  const [generatingImage, setGeneratingImage] = useState(false);

  const handleGenerate = () => {
    if (prompt.trim() === '') return;
    setGeneratingImage(true);
    // Simulate image generation
    setTimeout(() => {
      setGeneratingImage(false);
    }, 3000);
  };

  const modelTabs = [
    { id: 'flux-pro', name: 'Flux-Pro' },
    { id: 'mdj', name: 'MDJ' },
    { id: 'dall-e', name: 'Dall-E 3' },
    { id: 'sd', name: 'SD' },
    { id: 'sd-3', name: 'SD 3' },
    { id: 'ideogram', name: 'Ideogram' },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex items-center mb-6">
        <button className="p-2 rounded-md hover:bg-gray-100 mr-2">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-medium">Generated Images</h1>
      </div>

      {/* Model Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-8 overflow-x-auto pb-2">
          {modelTabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-3 px-1 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Prompt Input */}
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
        <h2 className="text-lg font-medium mb-4">Prompt</h2>
        
        <div className="mb-4">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your image prompt here..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
              <RefreshCw size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Settings size={18} />
            </button>
            <span className="text-sm text-gray-500">Advanced Mode</span>
          </div>
          
          <button
            onClick={handleGenerate}
            disabled={prompt.trim() === '' || generatingImage}
            className={`px-4 py-2 rounded-md ${
              prompt.trim() === '' || generatingImage
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            } transition-colors`}
          >
            {generatingImage ? (
              <div className="flex items-center">
                <RefreshCw size={16} className="animate-spin mr-2" />
                <span>Generating...</span>
              </div>
            ) : (
              'Generate'
            )}
          </button>
        </div>
      </div>

      {/* Advanced Options */}
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-sm font-medium">Sampling Steps</span>
                <button className="ml-1 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="17" r="1" fill="currentColor"/>
                  </svg>
                </button>
              </div>
              <span className="text-sm">20</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              defaultValue="20"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-sm font-medium">CFG Scale</span>
                <button className="ml-1 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="17" r="1" fill="currentColor"/>
                  </svg>
                </button>
              </div>
              <span className="text-sm">7</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              defaultValue="7"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Generated Image (Placeholder) */}
      {!generatingImage && (
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">10:27 05/29/2025</span>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Download size={18} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Share2 size={18} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ThumbsUp size={18} />
              </button>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center">
              <Image size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">Generated images will appear here</p>
            </div>
          </div>
        </div>
      )}

      {/* Loading state */}
      {generatingImage && (
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center">
              <RefreshCw size={48} className="mx-auto text-gray-400 mb-4 animate-spin" />
              <p className="text-gray-500">Generating your image...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagesPage;