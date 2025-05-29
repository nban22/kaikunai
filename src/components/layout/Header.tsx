import React, { useState } from 'react';
import { 
  Menu, 
  Globe, 
  User, 
  LogOut, 
  Clock, 
  ChevronDown, 
  Zap,
  Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfileDisplay from './ProfileDisplay';

interface HeaderProps {
  toggleSidebar: () => void;
  toggleNotificationCenter: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, toggleNotificationCenter }) => {
  const navigate = useNavigate();
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'jp', name: 'Japan' },
    { code: 'vi', name: 'Vietnam' }
  ];

  const handleLanguageSelect = (code: string) => {
    setLanguageDropdownOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 z-20 shadow-sm">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md lg:hidden hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button 
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100"
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            >
              <Globe size={18} />
              <span className="hidden sm:inline">English</span>
              <ChevronDown size={16} />
            </button>

            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30 border border-gray-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleLanguageSelect(lang.code)}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Credits/Coins */}
          <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full">
            <span className="text-sm font-medium">Coins: 5,000</span>
            <Zap size={16} className="text-amber-500" />
            <span className="text-sm font-medium">47</span>
          </div>

          {/* Notifications */}
          <button 
            onClick={toggleNotificationCenter}
            className="relative p-2 rounded-full hover:bg-gray-100"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="relative">
            <button 
              className="flex items-center"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <span>J</span>
              </div>
              <ChevronDown size={16} className="ml-1 text-gray-600" />
            </button>

            {profileDropdownOpen && (
              <ProfileDisplay
                isOpen={profileDropdownOpen}
                onClose={() => setProfileDropdownOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;