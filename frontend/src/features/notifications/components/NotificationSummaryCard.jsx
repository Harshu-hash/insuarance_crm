import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../../utils/cn';

const NotificationSummaryCard = ({ title, value, icon, color = 'primary' }) => {
  const Icon = LucideIcons[icon] || LucideIcons.Bell;
  
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50 hover:shadow-md transition-all">
      <CardContent className="p-4 flex items-center space-x-4">
        <div className={cn(
          "p-2.5 rounded-xl",
          color === 'primary' && "bg-primary/5 text-primary",
          color === 'success' && "bg-success/5 text-success",
          color === 'warning' && "bg-warning/5 text-warning",
          color === 'danger' && "bg-danger/5 text-danger",
          color === 'info' && "bg-info/5 text-info",
        )}>
          <Icon size={20} />
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{title}</p>
          <h3 className="text-xl font-black text-slate-800 tracking-tight leading-none">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSummaryCard;
