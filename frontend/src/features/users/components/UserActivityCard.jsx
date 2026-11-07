import React from 'react';
import { History, Mail, Shield, Calendar } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const ActivityRow = ({ icon: Icon, title, time }) => (
  <div className="px-5 py-3 hover:bg-slate-50 transition-colors flex items-center justify-between group">
    <div className="flex items-center">
      <div className="h-8 w-8 bg-slate-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
        <Icon size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
      </div>
      <p className="text-xs font-bold text-text-primary">{title}</p>
    </div>
    <span className="text-[10px] font-medium text-slate-400">{time}</span>
  </div>
);

const UserActivityCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-50 flex items-center justify-between bg-white">
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center">
          <History size={16} className="text-primary mr-2" />
          Recent User Activity
        </h3>
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">Mock Records</span>
      </div>
      <div className="p-0">
         <div className="divide-y divide-slate-50">
            <ActivityRow icon={Mail} title="Sent Password Reset Email" time="2 days ago" />
            <ActivityRow icon={Shield} title="Updated Profile Information" time="1 month ago" />
            <ActivityRow icon={Calendar} title="Account Created" time={dayjs(user?.createdAt).fromNow()} />
         </div>
      </div>
      <div className="p-4 bg-slate-50/50 border-t border-slate-50 text-center">
        <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View Full Audit Log</button>
      </div>
    </div>
  );
};

export default UserActivityCard;
