import React from 'react';
import Card from '../../../components/ui/Card';
import { Network, Building2, Map, Users } from 'lucide-react';

const EnrollmentHierarchyCard = ({ enrollment }) => {
  return (
    <Card title="Hierarchy Mapping" icon={<Network className="h-5 w-5 text-emerald-600" />}>
      <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
        <div className="relative">
          <div className="absolute -left-[1.375rem] top-1 h-3 w-3 rounded-full bg-slate-200 border-2 border-white shadow-sm" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">District</span>
            <span className="text-sm font-semibold text-slate-900">{enrollment.district}</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[1.375rem] top-1 h-3 w-3 rounded-full bg-slate-200 border-2 border-white shadow-sm" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Block</span>
            <span className="text-sm font-semibold text-slate-900">{enrollment.block}</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[1.375rem] top-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">School</span>
            <span className="text-sm font-semibold text-slate-900">{enrollment.school}</span>
          </div>
        </div>

        <div className="pt-2 grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">BM</span>
            <span className="text-xs font-medium text-slate-700">{enrollment.bmName}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">DM</span>
            <span className="text-xs font-medium text-slate-700">{enrollment.dmName}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EnrollmentHierarchyCard;
