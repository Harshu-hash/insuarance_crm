import React from 'react';
import { MoreVertical, Eye, Edit2, Copy, Trash2, Power } from 'lucide-react';
import { cn } from '../../../utils/cn';
import RoleStatusBadge from './RoleStatusBadge';
import RoleTypeBadge from './RoleTypeBadge';
import ScopeBadge from './ScopeBadge';
import Button from '../../../components/ui/Button';

const RoleTable = ({ 
  roles = [], 
  isLoading = false, 
  onView, 
  onEdit, 
  onClone, 
  onToggleStatus,
  onDelete 
}) => {
  if (isLoading) {
    return (
      <div className="w-full bg-white rounded-xl border border-border overflow-hidden animate-pulse">
        <div className="h-12 bg-slate-50 border-b border-border" />
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-16 border-b border-border last:border-0" />
        ))}
      </div>
    );
  }

  if (roles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl border-2 border-dashed border-slate-200">
        <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <Edit2 className="h-6 w-6 text-slate-300" />
        </div>
        <h3 className="text-sm font-bold text-text-primary">No roles found</h3>
        <p className="text-xs text-text-secondary mt-1">Try adjusting your filters or create a new role.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-slate-50 border-b border-border">
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Role Name</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Role Key</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Type</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Scope</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-center">Permissions</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-center">Users</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {roles.map((role) => (
              <tr 
                key={role.id} 
                className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                onClick={() => onView(role.id)}
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{role.name}</p>
                    <p className="text-[11px] text-text-secondary truncate max-w-[200px]">{role.description}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <code className="text-[11px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                    {role.key}
                  </code>
                </td>
                <td className="px-6 py-4">
                  <RoleTypeBadge type={role.type} />
                </td>
                <td className="px-6 py-4">
                  <ScopeBadge scope={role.scope} />
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-xs font-bold text-text-primary bg-slate-100 h-6 w-6 inline-flex items-center justify-center rounded-full">
                    {role.permissions.includes('all') ? '∞' : role.permissions.length}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-xs font-medium text-text-secondary">
                    {role.assignedUsers || 0}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <RoleStatusBadge status={role.status} />
                </td>
                <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onView(role.id)}
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onEdit(role.id)}
                      title="Edit Role"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onClone(role.id)}
                      title="Clone Role"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onToggleStatus(role.id)}
                      title={role.status === 'active' ? 'Deactivate' : 'Activate'}
                    >
                      <Power className={cn("h-4 w-4", role.status === 'active' ? "text-amber-500" : "text-emerald-500")} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleTable;
