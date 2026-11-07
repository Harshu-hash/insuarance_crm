import React from 'react';
import { Clock, CheckCircle2, Send, Calendar, AlertCircle } from 'lucide-react';
import { cn } from '../../../utils/cn';

const NotificationTimelineCard = ({ notification }) => {
  const events = [
    { label: 'Created', time: notification.createdAt, icon: Calendar, status: 'completed' },
    { label: 'Scheduled', time: notification.scheduledAt || notification.createdAt, icon: Clock, status: notification.scheduledAt ? 'pending' : 'completed' },
    { label: 'Dispatch Started', time: notification.sentAt, icon: Send, status: notification.sentAt ? 'completed' : 'pending' },
    { label: 'Delivery Completed', time: notification.sentAt, icon: CheckCircle2, status: notification.sentAt ? 'completed' : 'pending' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-6">Delivery Timeline</h4>
      <div className="space-y-6">
        {events.map((event, idx) => {
          const Icon = event.icon;
          const isLast = idx === events.length - 1;
          const isCompleted = event.status === 'completed';

          return (
            <div key={idx} className="relative flex items-start space-x-4">
              {!isLast && (
                <div className={cn(
                  "absolute left-2.5 top-6 bottom-0 w-0.5 ml-[-1px]",
                  isCompleted ? "bg-primary" : "bg-slate-100 border-l-2 border-dashed border-slate-200"
                )}></div>
              )}
              <div className={cn(
                "p-1.5 rounded-full z-10",
                isCompleted ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-slate-50 text-slate-300 border border-slate-100"
              )}>
                <Icon size={12} />
              </div>
              <div>
                <p className={cn("text-[11px] font-black uppercase tracking-tight", isCompleted ? "text-slate-800" : "text-slate-400")}>
                  {event.label}
                </p>
                {event.time && (
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                    {new Date(event.time).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationTimelineCard;
