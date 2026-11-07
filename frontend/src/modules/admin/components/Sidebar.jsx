import React from 'react';
import { Shield, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { NAV_CONFIG } from '../../../constants/navigation.config';
import { cn } from '../../../utils/cn';
import { useAuthStore } from '../../../app/store/auth.store';
import { useLayoutStore } from '../../../app/store/layout.store';
import SidebarGroup from './SidebarGroup';

const Sidebar = () => {
  const roleState = useAuthStore((state) => state.role);
  const permissions = useAuthStore((state) => state.permissions) || [];
  const user = useAuthStore((state) => state.user);
  
  const { 
    sidebarCollapsed, 
    toggleSidebar, 
    isMobileSidebarOpen 
  } = useLayoutStore();

  const currentRole = (roleState || user?.role || '').toLowerCase();
  const isSuperAdmin = currentRole.includes('admin') || currentRole.includes('super');

  // Filter entire navigation tree based on permissions
  const filteredNav = React.useMemo(() => {
    const navData = Array.isArray(NAV_CONFIG) ? NAV_CONFIG : [];
    
    return navData.map(group => {
      const items = group.items.filter(item => {
        if (isSuperAdmin) return true;
        if (!item.permission) return true;
        return Array.isArray(permissions) && permissions.includes(item.permission);
      });
      return { ...group, items };
    }).filter(group => group.items.length > 0);
  }, [isSuperAdmin, permissions]);

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 bg-surface border-r border-border transition-all duration-300 ease-in-out lg:static lg:translate-x-0 shadow-lg lg:shadow-none",
        sidebarCollapsed ? "w-20" : "w-64",
        isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full relative">
        {/* Collapse Toggle (Desktop) */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-20 bg-surface border border-border rounded-full p-1 text-text-secondary hover:text-primary shadow-sm hidden lg:block z-50"
        >
          {sidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Logo */}
        <div className={cn(
          "h-16 flex items-center border-b border-border transition-all duration-300",
          sidebarCollapsed ? "justify-center" : "px-6"
        )}>
          <div className="h-9 w-9 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm shadow-primary/20">
            <Shield className="text-white h-5 w-5" />
          </div>
          {!sidebarCollapsed && (
            <span className="ml-3 text-lg font-bold text-text-primary tracking-tight truncate">
              Insurance<span className="text-primary">CRM</span>
            </span>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto py-6 scrollbar-hide">
          {filteredNav.map((group) => (
            <SidebarGroup 
              key={group.group} 
              group={group} 
              isCollapsed={sidebarCollapsed} 
            />
          ))}
        </nav>

        {/* User Info (Footer) */}
        <div className={cn(
          "p-4 border-t border-border bg-slate-50/50",
          sidebarCollapsed ? "flex justify-center" : ""
        )}>
          <div className={cn(
            "flex items-center rounded-xl transition-all duration-300",
            sidebarCollapsed ? "p-1" : "p-2 bg-white shadow-sm border border-slate-100"
          )}>
            <div className={cn(
              "rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all",
              sidebarCollapsed ? "h-10 w-10" : "h-9 w-9 mr-3"
            )}>
              <User className="h-4 w-4 text-primary" />
            </div>
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-text-primary truncate uppercase">Admin</p>
                <p className="text-[10px] text-text-secondary truncate font-medium">{roleState || user?.role}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
