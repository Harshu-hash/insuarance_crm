import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Edit, MoreVertical, ShieldAlert } from 'lucide-react';
import { UserStatusBadge, ApprovalStatusBadge } from './UserStatusBadge';
import { UserRoleBadge } from './UserRoleBadge';
import { cn } from '../../../utils/cn';
import dayjs from 'dayjs';

const UserTable = ({ users = [], isLoading }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">User Details</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Role</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scope</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Account Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Approval</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {isLoading ? (
              [1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="animate-pulse">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-slate-100 rounded-full mr-3"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-slate-100 rounded w-24"></div>
                        <div className="h-3 bg-slate-50 rounded w-32"></div>
                      </div>
                    </div>
                  </td>
                  <td colSpan={5} className="px-6 py-4">
                    <div className="h-4 bg-slate-50 rounded w-full"></div>
                  </td>
                </tr>
              ))
            ) : users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm border border-primary/20">
                        {user.fullName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-bold text-text-primary leading-none mb-1 group-hover:text-primary transition-colors cursor-pointer" onClick={() => navigate(`/admin/users/${user.id}`)}>
                          {user.fullName}
                        </p>
                        <p className="text-xs text-text-secondary">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <UserRoleBadge role={user.role} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-text-primary capitalize">{user.district || 'Unassigned'}</span>
                      {user.block && <span className="text-[10px] text-text-secondary mt-0.5">{user.block}</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <UserStatusBadge status={user.status} />
                  </td>
                  <td className="px-6 py-4">
                    <ApprovalStatusBadge status={user.approvalStatus} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button 
                        onClick={() => navigate(`/admin/users/${user.id}`)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => navigate(`/admin/users/${user.id}/edit`)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"
                        title="Edit User"
                      >
                        <Edit size={16} />
                      </button>
                      <button className="p-1.5 rounded-lg text-slate-300 hover:text-slate-600 hover:bg-slate-100 transition-all">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center max-w-xs mx-auto">
                    <div className="h-16 w-16 bg-slate-50 text-slate-200 rounded-full flex items-center justify-center mb-4">
                      <ShieldAlert size={32} />
                    </div>
                    <h3 className="text-sm font-bold text-text-primary">No Users Found</h3>
                    <p className="text-xs text-text-secondary mt-1">Try adjusting your filters or search query.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Footer / Pagination Placeholder */}
      {!isLoading && users.length > 0 && (
        <div className="px-6 py-4 bg-slate-50/30 border-t border-slate-50 flex items-center justify-between">
          <p className="text-xs font-medium text-text-secondary">
            Showing <span className="font-bold text-text-primary">{users.length}</span> of <span className="font-bold text-text-primary">{users.length}</span> results
          </p>
          <div className="flex items-center space-x-2">
            <button disabled className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold uppercase tracking-widest text-slate-300">Previous</button>
            <button disabled className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold uppercase tracking-widest text-slate-300">Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
