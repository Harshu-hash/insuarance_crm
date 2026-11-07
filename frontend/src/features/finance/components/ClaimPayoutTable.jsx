import React from 'react';
import PayoutStatusBadge from './PayoutStatusBadge';
import Button from '../../../components/ui/Button';
import { Eye, ShieldCheck, Send } from 'lucide-react';

const ClaimPayoutTable = ({ data, isLoading, onViewDetails }) => {
  if (isLoading) {
    return <div className="w-full h-64 bg-slate-50 animate-pulse rounded-xl"></div>;
  }

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Payout ID</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Claim / Student</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Hospital</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Approved Amount</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Ref Number</th>
              <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Payout Date</th>
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
                    <span className="text-xs font-bold text-slate-700">{row.studentName}</span>
                    <span className="text-[10px] text-slate-400">{row.claimId}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-600">{row.hospitalName}</span>
                    <span className="text-[10px] text-slate-400">{row.district}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className="text-xs font-black text-slate-800">₹{row.approvedAmount.toLocaleString()}</span>
                </td>
                <td className="px-4 py-4">
                  <PayoutStatusBadge status={row.status} />
                </td>
                <td className="px-4 py-4">
                  <span className="text-[10px] font-medium text-slate-600 font-mono">{row.paymentReference || 'N/A'}</span>
                </td>
                <td className="px-4 py-4 text-[10px] text-slate-500">
                  {row.payoutDate ? new Date(row.payoutDate).toLocaleDateString() : 'Pending'}
                </td>
                <td className="px-4 py-4 text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={() => onViewDetails?.(row)}>
                      <Eye size={14} className="text-slate-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <Send size={14} className="text-slate-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <ShieldCheck size={14} className="text-slate-400" />
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

export default ClaimPayoutTable;
