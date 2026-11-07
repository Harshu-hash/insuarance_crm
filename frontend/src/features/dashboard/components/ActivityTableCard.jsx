import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/Card';
import { cn } from '../../../utils/cn';

const ActivityTableCard = ({ title, columns, data, isLoading }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50">
      <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-bold text-text-primary uppercase tracking-wider">{title}</CardTitle>
        <button className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">
          View All
        </button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className="px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {isLoading ? (
                [1, 2, 3].map((i) => (
                  <tr key={i} className="animate-pulse">
                    {columns.map((col) => (
                      <td key={col.key} className="px-5 py-4">
                        <div className="h-4 bg-slate-50 rounded w-16"></div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : data.length > 0 ? (
                data.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group cursor-pointer text-sm">
                    {columns.map((col) => (
                      <td key={col.key} className="px-5 py-3 text-xs font-medium text-text-primary truncate max-w-[150px]">
                        {col.render ? col.render(row[col.key], row) : row[col.key]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="px-5 py-10 text-center text-xs text-slate-400">
                    No recent records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTableCard;
