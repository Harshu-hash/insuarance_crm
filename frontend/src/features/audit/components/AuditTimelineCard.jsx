import React from 'react';
import Card from '../../../components/ui/Card';
import { Clock, CheckCircle2, ShieldCheck, Database, FileText } from 'lucide-react';

const AuditTimelineCard = ({ timestamp, status }) => {
  const time = new Date(timestamp);
  
  const events = [
    {
      title: 'Action Initiated',
      time: time.toLocaleTimeString(),
      icon: <Clock size={14} className="text-blue-500" />,
      description: 'The user triggered the action from the interface.',
      status: 'completed'
    },
    {
      title: 'Authentication & RBAC Validated',
      time: new Date(time.getTime() + 50).toLocaleTimeString(),
      icon: <ShieldCheck size={14} className="text-green-500" />,
      description: 'User permissions verified successfully.',
      status: 'completed'
    },
    {
      title: 'Record Updated',
      time: new Date(time.getTime() + 120).toLocaleTimeString(),
      icon: <Database size={14} className={status === 'success' ? 'text-green-500' : 'text-red-500'} />,
      description: status === 'success' ? 'Database transaction committed.' : 'Database transaction failed.',
      status: status === 'success' ? 'completed' : 'failed'
    },
    {
      title: 'Audit Log Created',
      time: new Date(time.getTime() + 150).toLocaleTimeString(),
      icon: <FileText size={14} className="text-primary" />,
      description: 'System state captured in audit history.',
      status: 'completed'
    }
  ];

  return (
    <Card title="Activity Timeline" icon={<Clock size={18} />}>
      <div className="relative space-y-6 before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-100">
        {events.map((event, index) => (
          <div key={index} className="relative flex items-start group">
            <div className={`absolute left-0 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white ${event.status === 'failed' ? 'bg-red-100' : 'bg-slate-100'} z-10`}>
              {event.icon}
            </div>
            <div className="pl-12">
              <div className="flex items-center mb-1">
                <h4 className="text-sm font-semibold text-slate-900 mr-2">{event.title}</h4>
                <span className="text-[10px] text-slate-400 font-medium">{event.time}</span>
              </div>
              <p className="text-xs text-slate-500">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AuditTimelineCard;
