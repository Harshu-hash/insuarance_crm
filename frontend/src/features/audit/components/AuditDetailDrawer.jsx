import React from 'react';
import { X, ExternalLink, User, Target, GitCompare, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuditLogDetails } from '../hooks/useAuditLogDetails';
import AuditActionBadge from './AuditActionBadge';
import AuditModuleBadge from './AuditModuleBadge';
import AuditSeverityBadge from './AuditSeverityBadge';
import AuditStatusBadge from './AuditStatusBadge';
import AuditChangeDiffCard from './AuditChangeDiffCard';
import Button from '../../../components/ui/Button';

const AuditDetailDrawer = ({ logId, isOpen, onClose }) => {
  const navigate = useNavigate();
  const { log, loading, error } = useAuditLogDetails(logId);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Audit Log</span>
              <span className="text-xs font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">{logId}</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900">Log Details</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {loading ? (
            <div className="space-y-6 animate-pulse">
              <div className="h-20 bg-slate-50 rounded-xl" />
              <div className="h-40 bg-slate-50 rounded-xl" />
              <div className="h-40 bg-slate-50 rounded-xl" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-danger font-medium">{error}</p>
              <Button variant="outline" size="sm" onClick={onClose} className="mt-4">Close</Button>
            </div>
          ) : log && (
            <>
              {/* Summary Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Action</span>
                  <AuditActionBadge action={log.action} />
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Status</span>
                  <AuditStatusBadge status={log.status} />
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Module</span>
                  <AuditModuleBadge module={log.module} />
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Severity</span>
                  <AuditSeverityBadge severity={log.severity} />
                </div>
              </div>

              {/* Actor Section */}
              <div className="space-y-3">
                <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <User size={14} className="mr-2" />
                  Performed By
                </div>
                <div className="flex items-center p-4 bg-white border border-slate-200 rounded-xl">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3 text-sm">
                    {log.actor.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{log.actor.name}</div>
                    <div className="text-xs text-slate-500">{log.actor.role} • {log.actor.email}</div>
                  </div>
                </div>
              </div>

              {/* Target Section */}
              <div className="space-y-3">
                <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <Target size={14} className="mr-2" />
                  Target Resource
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                  <div className="text-sm font-bold text-slate-900">{log.target.label}</div>
                  <div className="flex items-center text-xs text-slate-500">
                    <span className="font-mono bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">{log.target.id}</span>
                    <span className="mx-2">•</span>
                    <span>{log.target.module} module</span>
                  </div>
                </div>
              </div>

              {/* Changes Section */}
              <div className="space-y-3">
                <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <GitCompare size={14} className="mr-2" />
                  Key Changes
                </div>
                <AuditChangeDiffCard changes={log.changes} />
              </div>

              {/* Metadata Section */}
              <div className="space-y-3">
                <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <Info size={14} className="mr-2" />
                  System Context
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">IP Address</span>
                    <span className="font-mono text-slate-700">{log.ip}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Timestamp</span>
                    <span className="text-slate-700">{new Date(log.timestamp).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end space-x-3">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => {
              onClose();
              navigate(`/admin/audit-logs/${logId}`);
            }}
          >
            <ExternalLink size={14} className="mr-2" />
            Full Details
          </Button>
        </div>
      </div>
    </>
  );
};

export default AuditDetailDrawer;
