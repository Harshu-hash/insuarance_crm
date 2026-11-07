import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { Lightbulb, TrendingUp, TrendingDown, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { cn } from '../../../utils/cn';

const ReportInsightCard = ({ type = 'info', text, title }) => {
  const config = {
    success: { icon: CheckCircle2, bg: 'bg-success/5', border: 'border-success/10', text: 'text-success', title: 'Operational Success' },
    warning: { icon: AlertTriangle, bg: 'bg-warning/5', border: 'border-warning/10', text: 'text-warning', title: 'Trend Alert' },
    danger: { icon: TrendingDown, bg: 'bg-danger/5', border: 'border-danger/10', text: 'text-danger', title: 'Critical Concern' },
    info: { icon: Lightbulb, bg: 'bg-primary/5', border: 'border-primary/10', text: 'text-primary', title: 'Strategic Insight' },
  };

  const style = config[type] || config.info;
  const Icon = style.icon;

  return (
    <Card className={cn("border-none shadow-sm shadow-slate-100", style.bg)}>
      <CardContent className="p-4 flex items-start space-x-4">
        <div className={cn("p-2 bg-white rounded-xl shadow-sm shrink-0", style.text)}>
          <Icon size={18} />
        </div>
        <div>
          <h4 className={cn("text-[10px] font-black uppercase tracking-widest mb-1", style.text)}>
            {title || style.title}
          </h4>
          <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
            {text}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportInsightCard;
