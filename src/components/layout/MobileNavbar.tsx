import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageCircle, Bot, Mic, Image, Grid, Users } from 'lucide-react';

const MobileNavbar: React.FC = () => {
  const navigationItems = [
    { name: 'Chat', path: '/chat', icon: <MessageCircle size={20} /> },
    { name: 'Bot', path: '/bot', icon: <Bot size={20} /> },
    { name: 'Talk', path: '/talk', icon: <Mic size={20} /> },
    { name: 'Images', path: '/images', icon: <Image size={20} /> },
    { name: 'Diffusion', path: '/diffusion', icon: <Grid size={20} /> },
    { name: 'Community', path: '/community', icon: <Users size={20} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-10">
      <div className="flex justify-between items-center">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex flex-col items-center p-2 rounded-md transition-colors ${
                isActive 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-blue-500'
              }`
            }
          >
            <span>{item.icon}</span>
            <span className="text-xs mt-1">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;