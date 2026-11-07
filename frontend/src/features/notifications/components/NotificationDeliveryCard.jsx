import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { CheckCircle2, AlertCircle, Clock, MousePointer2, Eye } from 'lucide-react';

const NotificationDeliveryCard = ({ stats }) => {
  if (!stats) return null;

  const cards = [
    { label: 'Total Sent', value: stats.sent, icon: CheckCircle2, color: 'text-primary' },
    { label: 'Delivered', value: stats.delivered, icon: CheckCircle2, color: 'text-success' },
    { label: 'Failed', value: stats.failed, icon: AlertCircle, color: 'text-danger' },
    { label: 'Read/Opened', value: stats.read, icon: Eye, color: 'text-info' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.label} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{card.label}</span>
              <Icon size={14} className={card.color} />
            </div>
            <p className="text-xl font-black text-slate-800 tracking-tight">{card.value.toLocaleString()}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NotificationDeliveryCard;
