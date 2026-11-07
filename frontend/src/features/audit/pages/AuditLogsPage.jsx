import React, { useState } from 'react';
import { Download, RefreshCw, Activity, ShieldCheck, DollarSign, AlertCircle, FileText, Clock } from 'lucide-react';
import PageHeader from '../../../components/admin/PageHeader';
import PageContainer from '../../../components/admin/PageContainer';
import AuditSummaryCard from '../components/AuditSummaryCard';
import AuditLogFilters from '../components/AuditLogFilters';
import AuditLogTable from '../components/AuditLogTable';
import AuditDetailDrawer from '../components/AuditDetailDrawer';
import { useAuditLogs } from '../hooks/useAuditLogs';
import Button from '../../../components/ui/Button';

const AuditLogsPage = () => {
  const [selectedLogId, setSelectedLogId] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { logs, summary, loading, filters, updateFilters, refresh, exportLogs } = useAuditLogs();

  const handleViewDetails = (id) => {
    setSelectedLogId(id);
    setIsDrawerOpen(true);
  };

  const handleExport = async () => {
    try {
      const result = await exportLogs();
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <PageContainer>
      <PageHeader
        title="Audit Logs"
        subtitle="Track important user actions, system changes, security events, and financial operations."
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={refresh} disabled={loading}>
              <RefreshCw size={14} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="primary" size="sm" onClick={handleExport}>
              <Download size={14} className="mr-2" />
              Export Logs
            </Button>
          </div>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AuditSummaryCard
          title="Total Logs"
          value={summary?.total || 0}
          icon={<FileText size={20} />}
          trend={12}
          variant="primary"
        />
        <AuditSummaryCard
          title="Today's Actions"
          value={summary?.today || 0}
          icon={<Clock size={20} />}
          trend={5}
        />
        <AuditSummaryCard
          title="Security Events"
          value={summary?.security || 0}
          icon={<ShieldCheck size={20} />}
          variant="warning"
        />
        <AuditSummaryCard
          title="Finance Events"
          value={summary?.finance || 0}
          icon={<DollarSign size={20} />}
          variant="success"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
         <AuditSummaryCard
          title="Failed Actions"
          value={summary?.failed || 0}
          icon={<AlertCircle size={20} />}
          variant="danger"
        />
        <AuditSummaryCard
          title="High Severity"
          value={summary?.highSeverity || 0}
          icon={<Activity size={20} />}
          variant="danger"
        />
      </div>

      {/* Filters */}
      <AuditLogFilters
        filters={filters}
        onFilterChange={updateFilters}
        onReset={() => updateFilters({
          search: '',
          module: '',
          action: '',
          severity: '',
          status: '',
          securityOnly: false,
          financeOnly: false,
        })}
      />

      {/* Logs Table */}
      <AuditLogTable
        logs={logs}
        loading={loading}
        onViewDetails={handleViewDetails}
      />

      {/* Detail Drawer */}
      <AuditDetailDrawer
        logId={selectedLogId}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </PageContainer>
  );
};

export default AuditLogsPage;
