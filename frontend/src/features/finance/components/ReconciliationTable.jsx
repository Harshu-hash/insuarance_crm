import React from 'react';
import ReconciliationStatusBadge from './ReconciliationStatusBadge';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import { Eye, CheckCircle2, MessageSquare } from 'lucide-react';
import { RECONCILIATION_SEVERITY } from '../constants/finance.constants';

const ReconciliationTable = ({ data, isLoading, onViewDetails }) => {
  const getSeverityVariant = (severity) => {
    switch (severity) {
      case RECONCILIATION_SEVERITY.CRITICAL: return 'danger';
      case RECONCILIATION_SEVERITY.HIGH: return 'warning';
      case RECONCILIATION_SEVERITY.MEDIUM: return 'primary';
      case RECONCILIATION_SEVERITY.LOW: return 'secondary';
      default: return 'outline';
    }
  };

  if (isLoading) {
    return <div className="w-full h-64 bg-slate-50 animate-pulse rounded-xl"></div>;
  }

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Recon ID</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Type / Record</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Expected</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Actual</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Diff</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Severity</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-4">
                  <span className="text-xs font-bold text-primary">{row.id}</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-700 capitalize">{row.type.replace('_', ' ')}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{row.linkedRecord}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className="text-xs text-slate-600">₹{row.expectedAmount.toLocaleString()}</span>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className="text-xs text-slate-600">₹{row.actualAmount.toLocaleString()}</span>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className={cn(
                    "text-xs font-bold",
                    row.difference > 0 ? "text-danger" : "text-success"
                  )}>
                    ₹{row.difference.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <Badge variant={getSeverityVariant(row.severity)} className="text-[9px] px-1 py-0 uppercase">
                    {row.severity}
                  </Badge>
                </td>
                <td className="px-4 py-4">
                  <ReconciliationStatusBadge status={row.status} />
                </td>
                <td className="px-4 py-4 text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={() => onViewDetails?.(row)}>
                      <Eye size={14} className="text-slate-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <CheckCircle2 size={14} className="text-slate-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <MessageSquare size={14} className="text-slate-400" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Simple CN utility for this file since we are using it
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default ReconciliationTable;
