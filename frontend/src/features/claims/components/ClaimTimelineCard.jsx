import React from 'react';
import { Card } from '../../../components/ui/Card';
import { History, Plus, CheckCircle2, User, Clock, MessageSquare } from 'lucide-react';

const ClaimTimelineCard = ({ timeline }) => {
  return (
    <Card 
      title="Claim History Timeline" 
      icon={<History className="h-5 w-5 text-slate-600" />}
    >
      <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
        {timeline.map((item, index) => (
          <div key={index} className="relative pl-8 group">
            <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm z-10 group-hover:scale-110 group-hover:border-blue-200 transition-all">
              <div className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900 leading-none">{item.event}</span>
              <div className="flex items-center mt-1.5 space-x-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                <div className="flex items-center">
                  <Clock className="h-2.5 w-2.5 mr-1" />
                  {item.date}
                </div>
                <div className="flex items-center">
                  <User className="h-2.5 w-2.5 mr-1" />
                  {item.user}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ClaimTimelineCard;
