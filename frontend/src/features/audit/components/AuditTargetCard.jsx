import React from 'react';
import Card from '../../../components/ui/Card';
import { Target, ExternalLink, Box } from 'lucide-react';
import AuditModuleBadge from './AuditModuleBadge';

const AuditTargetCard = ({ target }) => {
  return (
    <Card title="Target Resource" icon={<Target size={18} />} className="h-full">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Module</span>
            <div>
              <AuditModuleBadge module={target.module} />
            </div>
          </div>
          <div className="space-y-1 text-right">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Record ID</span>
            <div className="text-sm font-mono text-slate-700">{target.id}</div>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div className="flex items-start">
            <Box size={16} className="text-slate-400 mr-2 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Entity Label</span>
              <span className="text-sm font-medium text-slate-800">{target.label}</span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button className="flex items-center text-xs font-semibold text-primary hover:underline group">
            View Original Record
            <ExternalLink size={12} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AuditTargetCard;
