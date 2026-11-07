import React from 'react';
import Card from '../../../components/ui/Card';
import { History, Plus, CreditCard, CheckCircle2, Gift, AlertCircle } from 'lucide-react';

const icons = {
  plus: Plus,
  'credit-card': CreditCard,
  'check-circle': CheckCircle2,
  gift: Gift,
  'alert-circle': AlertCircle
};

const EnrollmentTimelineCard = ({ enrollment }) => {
  const timeline = enrollment.timeline || [];

  return (
    <Card title="Activity Timeline" icon={<History className="h-5 w-5 text-slate-600" />}>
      <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
        {timeline.map((item, index) => {
          const IconComp = icons[item.icon] || CheckCircle2;
          return (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm z-10 group-hover:scale-110 transition-transform">
                <IconComp className="h-4 w-4 text-slate-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-none">{item.status}</span>
                <span className="text-[10px] text-slate-500 font-medium mt-1 uppercase tracking-wider">{item.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default EnrollmentTimelineCard;
