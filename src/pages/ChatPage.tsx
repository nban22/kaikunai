import React, { useState } from 'react';
import { Plus, MessageCircle, History, PaperclipIcon, Send, Mic, Image } from 'lucide-react';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; time: string }[]>([
    { 
      text: "Hello! I'm Kaikun AI. How can I assist you today?", 
      isUser: false, 
      time: "10:24" 
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    const newMessage = {
      text: inputValue,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        text: "I'm processing your request. Give me a moment...",
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 flex-col border-r border-gray-200 bg-white">
        <div className="p-4 border-b border-gray-200">
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 py-2 px-4 rounded-lg transition-all">
            <Plus size={18} />
            <span>New Chat</span>
          </button>
        </div>
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Chat History</h3>
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer group">
                <MessageCircle size={16} className="text-gray-500 mr-2" />
                <div className="flex-1 truncate">
                  <span className="text-sm">Create a Gourmet Recipe</span>
                  <p className="text-xs text-gray-500">05/29/2025 10:26</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center">
            <h2 className="text-lg font-medium">GPT 4o Mini</h2>
          </div>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <History size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isUser 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p>{message.text}</p>
                <div 
                  className={`text-xs mt-1 ${
                    message.isUser ? 'text-blue-200' : 'text-gray-500'
                  }`}
                >
                  {message.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg p-2">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <PaperclipIcon size={20} />
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 outline-none text-gray-700"
            />
            <div className="flex space-x-1">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Mic size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Image size={20} />
              </button>
              <button 
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                className={`p-2 rounded-md ${
                  inputValue.trim() === '' 
                    ? 'text-gray-400' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;