import React from 'react';
import { Users, ChevronRight, User } from 'lucide-react';
import { cn } from '../../../utils/cn';
import Button from '../../../components/ui/Button';

const RoleUsersPreviewCard = ({ count = 0, users = [], onViewAll }) => {
  return (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-bold text-text-primary">Assigned Users</h3>
        </div>
        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          {count} Total
        </span>
      </div>

      <div className="p-4">
        {users.length > 0 ? (
          <div className="space-y-3">
            {users.map((user, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                  <User className="h-4 w-4 text-slate-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-text-primary truncate">{user.name}</p>
                  <p className="text-[10px] text-text-secondary truncate">{user.email}</p>
                </div>
              </div>
            ))}
            
            {count > users.length && (
              <button
                onClick={onViewAll}
                className="w-full mt-2 py-2 text-[11px] font-bold text-primary hover:bg-primary/5 rounded-lg border border-dashed border-primary/20 transition-colors flex items-center justify-center gap-1"
              >
                View all {count} users
                <ChevronRight className="h-3 w-3" />
              </button>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-xs text-text-secondary">No users currently assigned to this role.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleUsersPreviewCard;
