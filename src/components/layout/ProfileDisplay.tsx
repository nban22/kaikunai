import React from 'react';
import { User, Settings, Clock, LogOut, CreditCard, Bell, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProfileDisplayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    plan: 'Pro',
    credits: 5000,
    joinDate: 'May 2025'
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className={`absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-30 border border-gray-200`}>
      {/* User Info Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-lg">
            {userInfo.name.charAt(0)}
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-gray-900">{userInfo.name}</h3>
            <p className="text-sm text-gray-500">{userInfo.email}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-blue-600 font-medium">{userInfo.plan} Plan</span>
          <span className="text-gray-500">Member since {userInfo.joinDate}</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-2">
        <button
          onClick={() => handleNavigation('/settings/profile')}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <User size={16} className="mr-3" />
          <span>Profile Settings</span>
        </button>
        
        <button
          onClick={() => handleNavigation('/settings/notifications')}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Bell size={16} className="mr-3" />
          <span>Notification Preferences</span>
        </button>

        <button
          onClick={() => handleNavigation('/settings/privacy')}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Shield size={16} className="mr-3" />
          <span>Privacy Settings</span>
        </button>

        <button
          onClick={() => handleNavigation('/settings/billing')}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <CreditCard size={16} className="mr-3" />
          <span>Billing & Subscription</span>
        </button>

        <button
          onClick={() => handleNavigation('/history')}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Clock size={16} className="mr-3" />
          <span>Activity History</span>
        </button>
      </div>

      {/* Logout */}
      <div className="border-t border-gray-200 py-2">
        <button
          onClick={() => {/* Handle logout */}}
          className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
        >
          <LogOut size={16} className="mr-3" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDisplay;