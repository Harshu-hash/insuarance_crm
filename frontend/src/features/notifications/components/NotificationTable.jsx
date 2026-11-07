import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Copy, RotateCcw, XCircle, MoreVertical } from 'lucide-react';
import Button from '../../../components/ui/Button';
import { NotificationStatusBadge, NotificationChannelBadge, NotificationTypeBadge, NotificationAudienceBadge } from './NotificationBadges';

const NotificationTable = ({ data, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="h-16 border-b border-slate-50 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Notification Title</th>
              <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Channels</th>
              <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Audience</th>
              <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Recipients</th>
              <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                   <div className="flex flex-col">
                      <span className="text-xs font-black text-slate-800">{item.title}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{item.id}</span>
                   </div>
                </td>
                <td className="px-6 py-4">
                  <NotificationTypeBadge type={item.type} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {item.channels.map(c => <NotificationChannelBadge key={c} channel={c} />)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <NotificationAudienceBadge audience={item.audience} />
                </td>
                <td className="px-6 py-4 text-xs font-black text-slate-600">
                  {item.recipients.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <NotificationStatusBadge status={item.status} />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <Button variant="ghost" size="sm" onClick={() => navigate(`/admin/notifications/${item.id}`)} title="View Details">
                      <Eye size={14} className="text-slate-400" />
                    </Button>
                    <Button variant="ghost" size="sm" title="Duplicate">
                      <Copy size={14} className="text-slate-400" />
                    </Button>
                    <Button variant="ghost" size="sm">
                       <MoreVertical size={14} className="text-slate-400" />
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

export default NotificationTable;
