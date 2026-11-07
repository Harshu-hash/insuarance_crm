import React from 'react';
import { NavLink } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../../utils/cn';
import { useLayoutStore } from '../../../app/store/layout.store';

const SidebarItem = ({ item, isCollapsed }) => {
  // Use explicit fallback for icons to prevent invisible menu items
  const getIcon = (iconName) => {
    if (!iconName) return LucideIcons.HelpCircle;
    return LucideIcons[iconName] || LucideIcons[iconName.charAt(0).toUpperCase() + iconName.slice(1)] || LucideIcons.HelpCircle;
  };

  const IconComponent = getIcon(item.icon);
  const { closeMobileSidebar } = useLayoutStore();

  return (
    <NavLink
      to={item.path}
      onClick={() => closeMobileSidebar()}
      className={({ isActive }) => cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 group relative",
        isActive 
          ? "bg-primary/10 text-primary shadow-sm" 
          : "text-text-secondary hover:bg-slate-50 hover:text-text-primary"
      )}
    >
      <IconComponent className={cn(
        "h-5 w-5 transition-colors",
        isCollapsed ? "mx-auto" : "mr-3"
      )} />
      
      {!isCollapsed && (
        <span className="truncate flex-1">{item.label}</span>
      )}

      {/* Tooltip for collapsed mode */}
      {isCollapsed && (
        <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-[60]">
          {item.label}
        </div>
      )}
    </NavLink>
  );
};

export default SidebarItem;
