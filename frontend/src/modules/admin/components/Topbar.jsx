import React from 'react';
import { Menu, Bell, Search, LogOut, User, Settings, Globe } from 'lucide-react';
import { useAuthStore } from '../../../app/store/auth.store';
import { useLayoutStore } from '../../../app/store/layout.store';
import Button from '../../../components/ui/Button';

const Topbar = () => {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const { toggleMobileSidebar } = useLayoutStore();

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleMobileSidebar}
          className="p-2 rounded-lg text-text-secondary hover:bg-slate-50 lg:hidden transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        <div className="hidden md:flex items-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 w-64 lg:w-96 transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
          <Search className="h-4 w-4 text-slate-400 mr-3" />
          <input 
            type="text" 
            placeholder="Search for students, claims..." 
            className="bg-transparent border-none text-sm focus:ring-0 w-full placeholder:text-slate-400 p-0"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-4">
        {/* Language / Public Link */}
        <button className="p-2 rounded-lg text-text-secondary hover:bg-slate-50 hover:text-primary transition-all hidden sm:flex">
          <Globe className="h-5 w-5" />
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-lg text-text-secondary hover:bg-slate-50 hover:text-primary transition-all relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-danger rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-px bg-slate-200 mx-1"></div>

        {/* User Profile Dropdown */}
        <div className="relative group">
          <button className="flex items-center space-x-3 p-1.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col items-start hidden sm:flex pr-2">
              <span className="text-xs font-bold text-text-primary leading-none mb-1">{user?.name || 'Admin'}</span>
              <span className="text-[10px] text-text-secondary leading-none uppercase tracking-tighter">{user?.role}</span>
            </div>
          </button>
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-56 bg-white border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
            <div className="px-4 py-2 border-b border-border mb-1">
              <p className="text-xs font-bold text-text-primary truncate">{user?.email}</p>
              <p className="text-[10px] text-text-secondary truncate mt-0.5">Logged in as {user?.role}</p>
            </div>
            
            <a href="#profile" className="flex items-center px-4 py-2 text-sm text-text-primary hover:bg-slate-50 transition-colors">
              <User className="mr-3 h-4 w-4 text-text-secondary" />
              My Profile
            </a>
            <a href="#settings" className="flex items-center px-4 py-2 text-sm text-text-primary hover:bg-slate-50 transition-colors">
              <Settings className="mr-3 h-4 w-4 text-text-secondary" />
              Account Settings
            </a>
            
            <div className="px-2 mt-2 pt-2 border-t border-border">
              <button 
                onClick={logout}
                className="flex items-center w-full text-left px-3 py-2 text-sm text-danger hover:bg-danger/5 rounded-lg transition-colors"
              >
                <LogOut className="mr-3 h-4 w-4" />
                Logout Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
