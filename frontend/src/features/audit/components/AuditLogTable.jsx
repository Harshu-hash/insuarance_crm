import React from 'react';
import { Eye, ExternalLink, Download, User, MoreHorizontal, ShieldAlert, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuditActionBadge from './AuditActionBadge';
import AuditModuleBadge from './AuditModuleBadge';
import AuditSeverityBadge from './AuditSeverityBadge';
import AuditStatusBadge from './AuditStatusBadge';
import Button from '../../../components/ui/Button';

const AuditLogTable = ({ logs, loading, onViewDetails }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden animate-pulse">
        <div className="h-12 bg-slate-50 border-b border-slate-200" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 border-b border-slate-100 last:border-0" />
        ))}
      </div>
    );
  }

  if (logs.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-12 text-center">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <MoreHorizontal size={32} className="text-slate-300" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-1">No audit logs found</h3>
          <p className="text-slate-500 max-w-xs mx-auto">No audit logs found for the selected filters. Try adjusting your search or filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider">Timestamp</th>
              <th className="px-6 py-3 text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider">Actor</th>
              <th className="px-6 py-3 text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider">Module</th>
              <th className="px-6 py-3 text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3 text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider">Severity</th>
              <th className="px-6 py-3 text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-[10px] font-bold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-xs text-slate-900 font-medium">{new Date(log.timestamp).toLocaleDateString()}</div>
                  <div className="text-[10px] text-slate-400">{new Date(log.timestamp).toLocaleTimeString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold mr-2">
                      {log.actor.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 flex items-center">
                        {log.actor.name}
                        {log.isSecuritySensitive && <ShieldAlert size={10} className="ml-1 text-danger" title="Security Sensitive" />}
                        {log.isFinanceSensitive && <DollarSign size={10} className="ml-1 text-success" title="Finance Sensitive" />}
                      </div>
                      <div className="text-[10px] text-slate-500">{log.actor.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <AuditModuleBadge module={log.module} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <AuditActionBadge action={log.action} />
                  <div className="text-[10px] text-slate-400 mt-1 truncate max-w-[150px]">{log.target.label}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <AuditSeverityBadge severity={log.severity} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <AuditStatusBadge status={log.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => onViewDetails(log.id)}
                      className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      title="Quick View"
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                      onClick={() => navigate(`/admin/audit-logs/${log.id}`)}
                      className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
        <div className="text-xs text-slate-500">
          Showing <span className="font-semibold text-slate-700">{logs.length}</span> of <span className="font-semibold text-slate-700">{logs.length}</span> logs
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-8 text-[10px] uppercase font-bold" disabled>Previous</Button>
          <Button variant="outline" size="sm" className="h-8 text-[10px] uppercase font-bold" disabled>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default AuditLogTable;
