import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { useLayoutStore } from '../../../app/store/layout.store';
import { cn } from '../../../utils/cn';

const AdminLayout = () => {
  const { 
    sidebarCollapsed, 
    isMobileSidebarOpen, 
    closeMobileSidebar 
  } = useLayoutStore();

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      {/* Sidebar Overlay for Mobile */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300",
          isMobileSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobileSidebar}
      />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto overflow-x-hidden transition-all duration-300">
          {/* Outlet renders the page content */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
