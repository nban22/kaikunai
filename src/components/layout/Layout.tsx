import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileNavbar from './MobileNavbar';
import NotificationCenter from './NotificationCenter';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Layout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notificationCenterOpen, setNotificationCenterOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleNotificationCenter = () => {
    setNotificationCenterOpen(!notificationCenterOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {!isMobile && (
        <Sidebar 
          collapsed={sidebarCollapsed} 
          toggleSidebar={toggleSidebar} 
        />
      )}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar} 
          toggleNotificationCenter={toggleNotificationCenter}
        />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Outlet />
        </main>
        {isMobile && <MobileNavbar />}
      </div>
      <NotificationCenter 
        isOpen={notificationCenterOpen} 
        onClose={() => setNotificationCenterOpen(false)} 
      />
    </div>
  );
};

export default Layout;