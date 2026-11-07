import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { History, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

const IncentiveTimelineCard = ({ incentive }) => {
  const events = [
    { title: 'Enrollment Paid', date: incentive.generatedDate, icon: CheckCircle2, color: 'success' },
    { title: 'Incentive Generated', date: incentive.generatedDate, icon: CheckCircle2, color: 'success' },
    { title: 'Marked Payable', date: incentive.generatedDate, icon: Clock, color: 'primary' },
    { title: 'Paid to Recipient', date: incentive.paidDate, icon: incentive.paidDate ? CheckCircle2 : Clock, color: incentive.paidDate ? 'success' : 'slate' },
  ];

  return (
    <Card className="border-none shadow-sm shadow-slate-200/50">
      <CardContent className="p-6">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center">
          <History size={14} className="mr-2" /> Incentive Lifecycle
        </h3>

        <div className="space-y-6 relative pl-4 border-l-2 border-slate-100 ml-2">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div key={index} className="relative">
                <div className={cn(
                  "absolute -left-[21px] top-0 h-3 w-3 rounded-full border-2 border-white shadow-sm",
                  event.color === 'success' ? "bg-success" : 
                  event.color === 'primary' ? "bg-primary" : "bg-slate-300"
                )} />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black text-slate-700">{event.title}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{event.date ? new Date(event.date).toLocaleDateString() : 'Pending'}</p>
                  </div>
                  <Icon size={14} className={cn(
                    event.color === 'success' ? "text-success" : 
                    event.color === 'primary' ? "text-primary" : "text-slate-300"
                  )} />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

const cn = (...classes) => classes.filter(Boolean).join(' ');

export default IncentiveTimelineCard;
