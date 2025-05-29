import React, { useState } from 'react';
import { 
  Menu, 
  Globe, 
  User, 
  LogOut, 
  Clock, 
  ChevronDown, 
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'jp', name: 'Japan' },
    { code: 'vi', name: 'Vietnam' }
  ];

  const handleLanguageSelect = (code: string) => {
    // Handle language change
    setLanguageDropdownOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 z-10 shadow-sm">
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
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
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

          {/* User Profile */}
          <div className="relative">
            <button 
              className="flex items-center"
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">
                <span>N</span>
              </div>
              <ChevronDown size={16} className="ml-1 text-gray-600" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    navigate('/settings');
                    setUserDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>Account</span>
                  </div>
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    navigate('/history');
                    setUserDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>History</span>
                  </div>
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <LogOut size={16} className="mr-2" />
                    <span>Logout</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;