import React from 'react';
import { X, Bell, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: 'New Feature Available',
      message: 'Try out our new AI Image Generation feature!',
      time: '2 hours ago',
      type: 'feature'
    },
    {
      id: 2,
      title: 'Credit Balance Update',
      message: 'You have received 100 free credits!',
      time: '5 hours ago',
      type: 'credit'
    }
  ];

  return (
    <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <Bell size={20} className="text-gray-600 mr-2" />
          <h2 className="text-lg font-medium">Notifications</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              navigate('/settings');
              onClose();
            }}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Settings size={18} />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto h-full pb-20">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-medium">{notification.title}</h3>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-sm text-gray-600">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter