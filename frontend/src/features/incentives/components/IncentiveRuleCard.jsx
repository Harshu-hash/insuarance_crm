import React from 'react';
import { Card, CardContent, CardHeader } from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import { Edit2, Zap, AlertCircle } from 'lucide-react';
import Button from '../../../components/ui/Button';

const IncentiveRuleCard = ({ rule, onEdit }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-xl bg-${rule.roleType === 'BM' ? 'primary' : 'success'}/10 text-${rule.roleType === 'BM' ? 'primary' : 'success'}`}>
            <Zap size={18} />
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-800">{rule.name}</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{rule.roleType} Incentive Rule</p>
          </div>
        </div>
        <Badge variant={rule.status === 'active' ? 'success' : 'outline'} className="uppercase text-[9px]">
          {rule.status}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Incentive Amount</span>
            <span className="text-3xl font-black text-slate-900">₹{rule.amount}</span>
            <span className="text-xs font-bold text-slate-400 ml-1">/{rule.calculationType === 'fixed' ? 'Enrollment' : '%'}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(rule)} className="h-8 w-8 p-0 bg-white shadow-sm border border-slate-200 rounded-full">
            <Edit2 size={14} className="text-slate-500" />
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="mt-1 h-1 w-1 rounded-full bg-slate-300 shrink-0" />
            <div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter block">Trigger Event</span>
              <p className="text-xs font-bold text-slate-700">{rule.triggerEvent}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="mt-1 h-1 w-1 rounded-full bg-slate-300 shrink-0" />
            <div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter block">Payable Condition</span>
              <p className="text-xs font-bold text-slate-700">{rule.payableCondition}</p>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center text-[10px] font-bold text-slate-400">
            <AlertCircle size={12} className="mr-1" /> Reverses on refund
          </div>
          <span className="text-[10px] font-black text-slate-400">Eff: {rule.effectiveFrom}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncentiveRuleCard;
