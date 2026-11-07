import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { UserRoleBadge } from './UserRoleBadge';
import { UserStatusBadge, ApprovalStatusBadge } from './UserStatusBadge';
import dayjs from 'dayjs';

const UserSummaryCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 text-center flex flex-col">
      <div className="h-24 w-24 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-4 border border-primary/20 text-2xl font-black">
        {user.fullName.split(' ').map(n => n[0]).join('')}
      </div>
      <h2 className="text-xl font-black text-text-primary mb-1">{user.fullName}</h2>
      <p className="text-xs text-text-secondary mb-6 font-medium">{user.email}</p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <UserRoleBadge role={user.role} />
        <UserStatusBadge status={user.status} />
        <ApprovalStatusBadge status={user.approvalStatus} />
      </div>

      <div className="pt-6 border-t border-slate-50 space-y-4">
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <span className="font-bold uppercase tracking-tighter">Joined On</span>
          <span className="font-medium text-text-primary">{dayjs(user.createdAt).format('DD MMM YYYY')}</span>
        </div>
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <span className="font-bold uppercase tracking-tighter">Last Login</span>
          <span className="font-medium text-text-primary">
            {user.lastLogin ? dayjs(user.lastLogin).format('DD MMM HH:mm') : 'Never'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserSummaryCard;
