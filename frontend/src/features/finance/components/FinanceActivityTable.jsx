import React from 'react';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import { Eye } from 'lucide-react';

const FinanceActivityTable = ({ data, isLoading }) => {
  if (isLoading) {
    return <div className="w-full h-48 bg-slate-50 animate-pulse rounded-xl"></div>;
  }

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Activity ID</th>
            <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Type</th>
            <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Amount</th>
            <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Date</th>
            <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-4 py-3">
                <span className="text-xs font-bold text-primary">{row.id}</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-xs text-slate-600">{row.type}</span>
              </td>
              <td className="px-4 py-3 text-right">
                <span className="text-xs font-bold text-slate-800">₹{row.amount.toLocaleString()}</span>
              </td>
              <td className="px-4 py-3">
                <Badge variant={row.status === 'success' || row.status === 'paid' ? 'success' : (row.status === 'failed' || row.status === 'mismatch' ? 'danger' : 'warning')} className="text-[10px] capitalize">
                  {row.status}
                </Badge>
              </td>
              <td className="px-4 py-3">
                <span className="text-[10px] text-slate-500">{new Date(row.createdDate).toLocaleDateString()}</span>
              </td>
              <td className="px-4 py-3 text-right">
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Eye size={12} className="text-slate-400" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinanceActivityTable;
