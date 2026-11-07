import React from 'react';
import IncentiveStatusBadge from './IncentiveStatusBadge';
import IncentiveTypeBadge from './IncentiveTypeBadge';
import Button from '../../../components/ui/Button';
import { Eye, ExternalLink, ShieldAlert, History } from 'lucide-react';

const IncentiveTable = ({ data, isLoading, onViewDetails }) => {
  if (isLoading) {
    return (
      <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="h-12 bg-slate-50 border-b border-slate-200 animate-pulse"></div>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="h-16 border-b border-slate-100 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Incentive ID</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Enrollment / Student</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Recipient</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Amount</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-4">
                  <span className="text-xs font-bold text-primary">{row.id}</span>
                  {row.flags?.includes('duplicate_risk') && (
                    <span className="ml-2 inline-flex items-center text-[8px] font-black text-danger uppercase">
                      <ShieldAlert size={10} className="mr-0.5" /> Risk
                    </span>
                  )}
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-700">{row.studentName}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{row.enrollmentId}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-700">{row.recipientName}</span>
                      <IncentiveTypeBadge type={row.recipientRole} />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-600">{row.district}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{row.block}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className="text-xs font-black text-slate-800">₹{row.amount.toLocaleString()}</span>
                </td>
                <td className="px-4 py-4">
                  <IncentiveStatusBadge status={row.status} />
                </td>
                <td className="px-4 py-4">
                  <span className="text-[10px] text-slate-500 font-medium">{new Date(row.generatedDate).toLocaleDateString()}</span>
                </td>
                <td className="px-4 py-4 text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={() => onViewDetails?.(row)}>
                      <Eye size={14} className="text-slate-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <History size={14} className="text-slate-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <ExternalLink size={14} className="text-slate-400" />
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

export default IncentiveTable;
