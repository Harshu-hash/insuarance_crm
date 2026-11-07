import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { Target, TrendingUp, Users } from 'lucide-react';

const IncentivePerformanceCard = ({ title, value, icon, color = "primary", description }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50">
      <CardContent className="p-5 flex items-center space-x-4">
        <div className={`h-10 w-10 rounded-xl bg-${color}/10 text-${color} flex items-center justify-center shrink-0`}>
          <Target size={20} />
        </div>
        <div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">{title}</span>
          <h4 className="text-lg font-black text-slate-800">{value}</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncentivePerformanceCard;
