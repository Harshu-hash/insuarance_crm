import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/Card';
import { cn } from '../../../utils/cn';

const PerformanceTable = ({ districts = [], isLoading }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden h-full">
      <div className="px-5 py-4 border-b border-slate-50 flex items-center justify-between">
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Top Performing Districts</h3>
        <span className="text-[10px] font-bold text-primary cursor-pointer hover:underline uppercase tracking-widest">
          View Rankings
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50">
            <tr>
              <th className="px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">District</th>
              <th className="px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Enrollments</th>
              <th className="px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {isLoading ? (
              [1, 2, 3, 4, 5].map(i => (
                <tr key={i} className="animate-pulse">
                  <td className="px-5 py-3"><div className="h-4 bg-slate-50 rounded w-24"></div></td>
                  <td className="px-5 py-3"><div className="h-4 bg-slate-50 rounded w-16 ml-auto"></div></td>
                  <td className="px-5 py-3"><div className="h-4 bg-slate-50 rounded w-12 ml-auto"></div></td>
                </tr>
              ))
            ) : districts.map((district, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors cursor-pointer">
                <td className="px-5 py-3 text-xs font-bold text-text-primary truncate">{district.name}</td>
                <td className="px-5 py-3 text-xs font-medium text-text-secondary text-right">{district.enrollments.toLocaleString()}</td>
                <td className="px-5 py-3 text-right">
                  <span className={cn(
                    "inline-block w-2 h-2 rounded-full",
                    idx === 0 ? "bg-success" : idx === districts.length - 1 ? "bg-warning" : "bg-primary"
                  )}></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceTable;
