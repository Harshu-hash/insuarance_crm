import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { Mail, MessageSquare, Bell, Smartphone, Globe } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { NOTIFICATION_CHANNELS } from '../constants/notification.constants';

const NotificationChannelSelector = ({ selectedChannels, onChange }) => {
  const channels = [
    { id: NOTIFICATION_CHANNELS.PUSH, label: 'Push Notification', icon: Bell, desc: 'Real-time mobile alerts' },
    { id: NOTIFICATION_CHANNELS.SMS, label: 'SMS Message', icon: Smartphone, desc: 'Direct carrier messaging' },
    { id: NOTIFICATION_CHANNELS.EMAIL, label: 'Email Address', icon: Mail, desc: 'Formal email communication' },
    { id: NOTIFICATION_CHANNELS.IN_APP, label: 'In-App Alert', icon: Globe, desc: 'Dashboard notification center' },
  ];

  const toggleChannel = (id) => {
    if (selectedChannels.includes(id)) {
      onChange(selectedChannels.filter(c => c !== id));
    } else {
      onChange([...selectedChannels, id]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {channels.map((channel) => {
        const Icon = channel.icon;
        const isActive = selectedChannels.includes(channel.id);
        return (
          <div 
            key={channel.id}
            onClick={() => toggleChannel(channel.id)}
            className={cn(
              "flex items-center space-x-4 p-4 rounded-2xl border-2 cursor-pointer transition-all",
              isActive 
                ? "border-primary bg-primary/5 shadow-sm shadow-primary/10" 
                : "border-slate-100 bg-white hover:border-slate-200"
            )}
          >
            <div className={cn(
              "p-3 rounded-xl",
              isActive ? "bg-primary text-white" : "bg-slate-50 text-slate-400"
            )}>
              <Icon size={20} />
            </div>
            <div>
              <h4 className={cn("text-xs font-black uppercase tracking-widest", isActive ? "text-primary" : "text-slate-600")}>
                {channel.label}
              </h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{channel.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NotificationChannelSelector;
