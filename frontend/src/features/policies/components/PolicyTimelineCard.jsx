import React from 'react';
import { Card } from '../../../components/ui/Card';
import { History, Plus, CheckCircle2, Edit2, ToggleRight } from 'lucide-react';

const PolicyTimelineCard = ({ policy }) => {
  const timeline = [
    { event: 'Policy Created', date: policy.createdDate, icon: Plus },
    { event: 'Configured Rules', date: policy.createdDate, icon: Edit2 },
    { event: 'Policy Activated', date: policy.startDate, icon: ToggleRight },
    { event: 'Enrollment Started', date: policy.startDate, icon: CheckCircle2 },
  ];

  return (
    <Card 
      title="Activity Timeline" 
      icon={<History className="h-5 w-5 text-slate-600" />}
    >
      <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
        {timeline.map((item, index) => (
          <div key={index} className="relative pl-8 group">
            <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm z-10 group-hover:scale-110 transition-transform">
              <item.icon className="h-3 w-3 text-slate-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900 leading-none">{item.event}</span>
              <span className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wider">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PolicyTimelineCard;
