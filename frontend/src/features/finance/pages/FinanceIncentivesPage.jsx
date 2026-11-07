import React, { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw } from 'lucide-react';
import FinanceSummaryCard from '../components/FinanceSummaryCard';
import FinanceFilters from '../components/FinanceFilters';
import IncentiveFinanceTable from '../components/IncentiveFinanceTable';
import { useFinanceIncentives } from '../hooks/useFinanceIncentives';

const FinanceIncentivesPage = () => {
  const { data, total, isLoading, params, updateParams, refetch } = useFinanceIncentives();

  const handleReset = () => {
    updateParams({ search: '', status: '', role: '', page: 1 });
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Finance Incentives"
        subtitle="Track incentive liabilities and payout status for Block Managers (BM) and District Managers (DM)."
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={refetch}>
              <RefreshCw size={14} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
            </Button>
            <Button variant="primary" size="sm">
              <Download size={14} className="mr-2" /> Export Incentives
            </Button>
          </div>
        }
      />

      <div className="space-y-6">
        {/* Quick Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FinanceSummaryCard title="Total Liability" value={450000} icon="Calculator" color="primary" />
          <FinanceSummaryCard title="Incentives Paid" value={320000} icon="CheckCircle2" color="success" />
          <FinanceSummaryCard title="Pending Payout" value={130000} icon="Clock" color="warning" />
          <FinanceSummaryCard title="On Hold" value={25000} icon="AlertCircle" color="danger" />
        </div>

        <FinanceFilters 
          filters={params} 
          onFilterChange={updateParams} 
          onReset={handleReset} 
          type="incentives"
        />

        <IncentiveFinanceTable 
          data={data} 
          isLoading={isLoading} 
        />

        {/* Pagination */}
        {!isLoading && data.length > 0 && (
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-500">
              Showing <span className="font-bold text-slate-900">{data.length}</span> results
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled={params.page === 1} onClick={() => updateParams({ page: params.page - 1 })}>Previous</Button>
              <Button variant="outline" size="sm" disabled={data.length < params.limit} onClick={() => updateParams({ page: params.page + 1 })}>Next</Button>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default FinanceIncentivesPage;
