import React, { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw } from 'lucide-react';
import IncentiveSummaryCard from '../components/IncentiveSummaryCard';
import IncentiveFilters from '../components/IncentiveFilters';
import IncentiveTable from '../components/IncentiveTable';
import IncentiveDetailDrawer from '../components/IncentiveDetailDrawer';
import { useIncentiveRecords } from '../hooks/useIncentiveRecords';

const IncentiveRecordsPage = () => {
  const { data, total, isLoading, params, updateParams, refetch } = useIncentiveRecords();
  const [selectedIncentive, setSelectedIncentive] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleViewDetails = (row) => {
    setSelectedIncentive(row);
    setIsDrawerOpen(true);
  };

  const handleReset = () => {
    updateParams({ search: '', status: '', role: '', page: 1 });
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Incentive Records"
        subtitle="Track individual incentive entries generated from successful student enrollments."
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={refetch}>
              <RefreshCw size={14} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
            </Button>
            <Button variant="primary" size="sm">
              <Download size={14} className="mr-2" /> Export Records
            </Button>
          </div>
        }
      />

      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
           <IncentiveSummaryCard title="Total" value={total} icon="List" color="primary" subtitle="Records" />
           <IncentiveSummaryCard title="BM" value={Math.floor(total*0.6)} icon="UserCheck" color="primary" />
           <IncentiveSummaryCard title="DM" value={Math.floor(total*0.4)} icon="Users" color="primary" />
           <IncentiveSummaryCard title="Payable" value={125} icon="Clock" color="warning" />
           <IncentiveSummaryCard title="Paid" value={840} icon="CheckCircle2" color="success" />
           <IncentiveSummaryCard title="On Hold" value={12} icon="AlertTriangle" color="warning" />
           <IncentiveSummaryCard title="Reversed" value={5} icon="RotateCcw" color="danger" />
           <IncentiveSummaryCard title="Disputed" value={3} icon="ShieldAlert" color="danger" />
        </div>

        <IncentiveFilters 
          filters={params} 
          onFilterChange={updateParams} 
          onReset={handleReset} 
        />

        <IncentiveTable 
          data={data} 
          isLoading={isLoading} 
          onViewDetails={handleViewDetails}
        />

        {/* Pagination */}
        {!isLoading && data.length > 0 && (
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">
              Showing <span className="text-slate-900">{data.length}</span> of <span className="text-slate-900">{total}</span> records
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled={params.page === 1} onClick={() => updateParams({ page: params.page - 1 })}>Previous</Button>
              <Button variant="outline" size="sm" disabled={data.length < params.limit} onClick={() => updateParams({ page: params.page + 1 })}>Next</Button>
            </div>
          </div>
        )}
      </div>

      <IncentiveDetailDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        incentive={selectedIncentive} 
      />
    </PageContainer>
  );
};

export default IncentiveRecordsPage;
