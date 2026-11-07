import React from 'react';
import Badge from '../../../components/ui/Badge';
import { Trophy, Medal } from 'lucide-react';

const IncentiveRankingTable = ({ data, type = 'BM', isLoading }) => {
  if (isLoading) {
    return <div className="w-full h-64 bg-slate-50 animate-pulse rounded-xl"></div>;
  }

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <h3 className="text-xs font-black text-slate-700 uppercase tracking-widest flex items-center">
          {type === 'BM' ? <Medal size={14} className="mr-2 text-primary" /> : <Trophy size={14} className="mr-2 text-warning" />}
          Top {type} Performance
        </h3>
        <Badge variant="outline" className="text-[9px] uppercase font-black">{data.length} Records</Badge>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white border-b border-slate-100">
              <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Rank</th>
              <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Name</th>
              <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Geography</th>
              <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-tighter text-right">Enrollments</th>
              <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-tighter text-right">Total Earnings</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50/30 transition-colors">
                <td className="px-4 py-3">
                  <div className={cn(
                    "h-6 w-6 rounded-lg flex items-center justify-center text-[10px] font-black",
                    index === 0 ? "bg-warning/20 text-warning border border-warning/20" : 
                    index === 1 ? "bg-slate-200/50 text-slate-500 border border-slate-200/50" :
                    index === 2 ? "bg-orange-100 text-orange-600 border border-orange-100" :
                    "bg-slate-50 text-slate-400 border border-slate-100"
                  )}>
                    {index + 1}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs font-bold text-slate-700">{row.name}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-600">{row.district}</span>
                    <span className="text-[9px] text-slate-400">{row.block || `${row.totalBmNetwork} BMs`}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="text-xs font-black text-slate-800">{row.enrollments || row.networkEnrollments}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="text-xs font-black text-primary">₹{(row.incentiveEarned).toLocaleString()}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const cn = (...classes) => classes.filter(Boolean).join(' ');

export default IncentiveRankingTable;
