import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Users, ClipboardCheck, TrendingUp, ArrowRight } from 'lucide-react';
import Button from '../../../components/ui/Button';

const PolicyUsageCard = ({ policy }) => {
  return (
    <Card 
      title="Usage Summary" 
      icon={<TrendingUp className="h-5 w-5 text-emerald-600" />}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-sm transition-all">
            <div className="flex items-center space-x-2 text-slate-400 mb-1">
              <Users className="h-4 w-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Enrollments</span>
            </div>
            <h4 className="text-xl font-black text-slate-900">{policy.enrollmentsCount?.toLocaleString()}</h4>
            <div className="mt-2 h-1 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-2/3" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-sm transition-all">
            <div className="flex items-center space-x-2 text-slate-400 mb-1">
              <ClipboardCheck className="h-4 w-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Claims</span>
            </div>
            <h4 className="text-xl font-black text-slate-900">{policy.claimsCount?.toLocaleString()}</h4>
            <div className="mt-2 h-1 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-1/4" />
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <Button variant="outline" className="w-full justify-between" size="sm">
            <span>View All Enrollments</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
          <Button variant="outline" className="w-full justify-between" size="sm">
            <span>View Linked Claims</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PolicyUsageCard;
