import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Download, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import PageHeader from '../../../components/admin/PageHeader';
import PageContainer from '../../../components/admin/PageContainer';
import { useAuditLogDetails } from '../hooks/useAuditLogDetails';
import AuditActionBadge from '../components/AuditActionBadge';
import AuditModuleBadge from '../components/AuditModuleBadge';
import AuditSeverityBadge from '../components/AuditSeverityBadge';
import AuditStatusBadge from '../components/AuditStatusBadge';
import AuditActorCard from '../components/AuditActorCard';
import AuditTargetCard from '../components/AuditTargetCard';
import AuditChangeDiffCard from '../components/AuditChangeDiffCard';
import AuditMetadataCard from '../components/AuditMetadataCard';
import AuditTimelineCard from '../components/AuditTimelineCard';
import Button from '../../../components/ui/Button';

const AuditLogDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { log, loading, error, refresh } = useAuditLogDetails(id);

  if (loading) {
    return (
      <PageContainer>
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-8 w-24 bg-slate-100 rounded animate-pulse" />
        </div>
        <div className="h-20 bg-slate-100 rounded-xl mb-8 animate-pulse" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-40 bg-slate-100 rounded-xl animate-pulse" />
            <div className="h-64 bg-slate-100 rounded-xl animate-pulse" />
          </div>
          <div className="space-y-6">
            <div className="h-40 bg-slate-100 rounded-xl animate-pulse" />
            <div className="h-64 bg-slate-100 rounded-xl animate-pulse" />
          </div>
        </div>
      </PageContainer>
    );
  }

  if (error || !log) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center py-20 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="h-16 w-16 bg-red-50 rounded-full flex items-center justify-center text-danger mb-4">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Failed to load log details</h2>
          <p className="text-slate-500 mb-6">{error || 'The requested audit log could not be found.'}</p>
          <div className="flex space-x-3">
            <Button variant="secondary" onClick={() => navigate('/admin/audit-logs')}>
              Back to Logs
            </Button>
            <Button variant="primary" onClick={refresh}>
              Try Again
            </Button>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="mb-6">
        <button 
          onClick={() => navigate('/admin/audit-logs')}
          className="flex items-center text-sm font-semibold text-slate-500 hover:text-primary transition-colors"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Audit Logs
        </button>
      </div>

      <PageHeader
        title={`Log Details: ${log.id}`}
        subtitle={`System record captured on ${new Date(log.timestamp).toLocaleString()}`}
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Download size={14} className="mr-2" />
              Export Detail
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink size={14} className="mr-2" />
              View Target
            </Button>
          </div>
        }
      />

      {/* Quick Summary Strip */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-8 flex flex-wrap items-center gap-6">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase mb-1">Action</span>
          <AuditActionBadge action={log.action} />
        </div>
        <div className="w-px h-10 bg-slate-100 hidden md:block" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase mb-1">Module</span>
          <AuditModuleBadge module={log.module} />
        </div>
        <div className="w-px h-10 bg-slate-100 hidden md:block" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase mb-1">Severity</span>
          <AuditSeverityBadge severity={log.severity} />
        </div>
        <div className="w-px h-10 bg-slate-100 hidden md:block" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase mb-1">Status</span>
          <AuditStatusBadge status={log.status} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Changes Diff */}
          <AuditChangeDiffCard changes={log.changes} />
          
          {/* Metadata Card */}
          <AuditMetadataCard 
            metadata={log.metadata} 
            ip={log.ip} 
            timestamp={log.timestamp}
            id={log.id}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Actor Card */}
          <AuditActorCard actor={log.actor} metadata={log.metadata} />

          {/* Target Card */}
          <AuditTargetCard target={log.target} />

          {/* Timeline Card */}
          <AuditTimelineCard timestamp={log.timestamp} status={log.status} />
        </div>
      </div>
    </PageContainer>
  );
};

export default AuditLogDetailsPage;
