import React from 'react';
import SidebarItem from './SidebarItem';
import { cn } from '../../../utils/cn';

const SidebarGroup = ({ group, isCollapsed }) => {
  // If all items in a group are hidden by permissions, the group itself should be hidden
  // This check is usually done in the parent Sidebar component during filtering
  
  return (
    <div className="space-y-1 mb-6">
      {!isCollapsed && (
        <h3 className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
          {group.group}
        </h3>
      )}
      
      <div className="space-y-1 px-3">
        {group.items.map((item) => (
          <SidebarItem 
            key={item.path} 
            item={item} 
            isCollapsed={isCollapsed} 
          />
        ))}
      </div>

      {isCollapsed && <div className="h-px bg-border mx-4 my-2" />}
    </div>
  );
};

export default SidebarGroup;
