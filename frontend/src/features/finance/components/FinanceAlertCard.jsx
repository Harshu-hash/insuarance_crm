import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { AlertCircle, ArrowRight } from 'lucide-react';
import Button from '../../../components/ui/Button';

const FinanceAlertCard = ({ title, count, color = "danger", description, actionLabel = "Review Records" }) => {
  const colorMap = {
    danger: "text-danger bg-danger/5 border-danger/10",
    warning: "text-warning bg-warning/5 border-warning/10",
    primary: "text-primary bg-primary/5 border-primary/10",
  };

  return (
    <Card className={`border ${colorMap[color] || colorMap.danger} shadow-none overflow-hidden`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg bg-white/50 border border-current/10`}>
              <AlertCircle size={18} />
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-xl font-black">{count}</span>
                <h4 className="text-sm font-bold">{title}</h4>
              </div>
              <p className="text-[10px] font-medium opacity-70 mt-1 max-w-[180px]">
                {description}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-wider hover:bg-white/50">
            {actionLabel} <ArrowRight size={12} className="ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinanceAlertCard;
