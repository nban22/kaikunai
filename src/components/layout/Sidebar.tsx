import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  MessageCircle, 
  Bot, 
  Mic, 
  Image, 
  Grid, 
  Users, 
  Settings, 
  Info, 
  Phone, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { KaikunLogo } from '../icons/KaikunLogo';

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  const navigationItems = [
    { name: 'AI Chat', path: '/chat', icon: <MessageCircle size={20} /> },
    { name: 'AI Bot', path: '/bot', icon: <Bot size={20} /> },
    { name: 'AI Talk', path: '/talk', icon: <Mic size={20} /> },
    { name: 'AI Images', path: '/images', icon: <Image size={20} /> },
    { name: 'Stable Diffusion', path: '/diffusion', icon: <Grid size={20} /> },
    { name: 'AI Community', path: '/community', icon: <Users size={20} /> },
  ];

  const secondaryItems = [
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
    { name: 'About', path: '/about', icon: <Info size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={20} /> },
    { name: 'Feedback', path: '/feedback', icon: <MessageSquare size={20} /> },
  ];

  return (
    <aside 
      className={`flex flex-col bg-[#0F172A] text-white transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center">
          <KaikunLogo className="h-8 w-8" />
          {!collapsed && <span className="ml-2 text-xl font-semibold">Kaikun AI</span>}
        </div>
        <button 
          onClick={toggleSidebar} 
          className="p-1 rounded-md hover:bg-gray-700 transition-colors"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700'
                  }`
                }
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-gray-700 pt-4">
          <ul className="space-y-1 px-2">
            {secondaryItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `flex items-center p-2 rounded-md transition-colors ${
                      isActive 
                        ? 'bg-gray-700 text-white' 
                        : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                    }`
                  }
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg transition-all transform hover:scale-105">
          <Sparkles size={18} />
          {!collapsed && <span>Upgrade to Pro</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;