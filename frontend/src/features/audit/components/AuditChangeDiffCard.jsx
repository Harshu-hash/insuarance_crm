import React from 'react';
import Card from '../../../components/ui/Card';
import { GitCompare, ArrowRight } from 'lucide-react';

const AuditChangeDiffCard = ({ changes }) => {
  if (!changes || changes.length === 0) {
    return (
      <Card title="Changes" icon={<GitCompare size={18} />}>
        <div className="flex flex-col items-center justify-center py-8 text-slate-400">
          <GitCompare size={32} className="mb-2 opacity-20" />
          <p className="text-sm italic">No changes recorded for this action.</p>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Changes" icon={<GitCompare size={18} />}>
      <div className="overflow-hidden border border-slate-100 rounded-lg">
        <table className="min-w-full divide-y divide-slate-100">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider">Field</th>
              <th className="px-4 py-2 text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider">Before</th>
              <th className="px-4 py-2 text-center w-10"></th>
              <th className="px-4 py-2 text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider">After</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {changes.map((change, index) => (
              <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-3 text-xs font-mono font-bold text-slate-700">{change.field}</td>
                <td className="px-4 py-3 text-xs text-slate-600 bg-red-50/30">
                  {change.before === null ? <span className="italic opacity-50">null</span> : String(change.before)}
                </td>
                <td className="px-4 py-3 text-slate-300">
                  <ArrowRight size={14} />
                </td>
                <td className="px-4 py-3 text-xs text-slate-800 font-medium bg-green-50/30">
                  {change.after === null ? <span className="italic opacity-50">null</span> : String(change.after)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default AuditChangeDiffCard;
