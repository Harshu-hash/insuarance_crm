import React from 'react';
import { Eye, Edit2, ShieldCheck, ShieldAlert, MoreVertical } from 'lucide-react';
import { BlockStatusBadge, BlockManagerBadge } from './BlockBadges';
import { BLOCK_STATUS } from '../constants/block.constants';
import { cn } from '../../../utils/cn';

const BlockTable = ({ blocks = [], isLoading, onView, onEdit, onToggleStatus }) => {
  if (isLoading) {
    return (
      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden animate-pulse p-20 text-center">
        <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Loading Blocks Execution Layer...</span>
      </div>
    );
  }

  if (blocks.length === 0) {
    return (
      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden py-16 px-10 text-center">
        <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-slate-200">
          <ShieldAlert className="h-8 w-8 text-slate-300" />
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-1">No blocks found</h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">We couldn't find any blocks matching your current filters or search criteria.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">Block Identity</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">Parent District</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">Manager</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-right">Schools</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-right">Enrollments</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-right">Claims</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-right">BM Incentive</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {blocks.map((block) => (
              <tr 
                key={block.id} 
                className="hover:bg-slate-50/50 transition-colors cursor-pointer group"
                onClick={() => onView(block.id)}
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-black text-text-primary group-hover:text-primary transition-colors">{block.name}</p>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">{block.code}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-text-primary bg-slate-100 px-2 py-0.5 rounded italic">
                      {block.districtName}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <BlockManagerBadge manager={block.manager} />
                </td>
                <td className="px-6 py-4 text-center">
                  <BlockStatusBadge status={block.status} />
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-sm font-bold text-text-primary">{block.metrics.totalSchools}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <div>
                    <p className="text-sm font-black text-emerald-600">{block.metrics.activeEnrollments}</p>
                    <p className="text-[9px] text-text-secondary font-bold uppercase tracking-tighter">OF {block.metrics.totalStudents}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-sm font-bold text-text-primary">{block.metrics.claimsCount}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-sm font-black text-primary">₹{block.metrics.incentiveGenerated.toLocaleString()}</p>
                </td>
                <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onView(block.id)}
                      className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-primary transition-colors"
                      title="View Dash"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => onEdit(block.id)}
                      className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-primary transition-colors"
                      title="Edit Block"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => onToggleStatus(block.id)}
                      className={cn(
                        "p-1.5 rounded transition-colors",
                        block.status === BLOCK_STATUS.ACTIVE 
                          ? 'text-red-400 hover:bg-red-50 hover:text-red-600' 
                          : 'text-emerald-400 hover:bg-emerald-50 hover:text-emerald-600'
                      )}
                      title={block.status === BLOCK_STATUS.ACTIVE ? 'Deactivate' : 'Activate'}
                    >
                      {block.status === BLOCK_STATUS.ACTIVE ? (
                        <ShieldAlert className="h-4 w-4" />
                      ) : (
                        <ShieldCheck className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer / Pagination Placeholder */}
      <div className="px-6 py-4 bg-slate-50 border-t border-border flex items-center justify-between">
        <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">
          Showing {blocks.length} execution units
        </p>
        <div className="flex items-center gap-2">
           <button className="px-3 py-1 text-[10px] font-bold border border-border bg-white rounded-md opacity-50 cursor-not-allowed">Previous</button>
           <button className="px-3 py-1 text-[10px] font-bold border border-border bg-white rounded-md opacity-50 cursor-not-allowed">Next</button>
        </div>
      </div>
    </div>
  );
};

export default BlockTable;
