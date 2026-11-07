import React, { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw, SearchX, CheckCircle } from 'lucide-react';
import FinanceSummaryCard from '../components/FinanceSummaryCard';
import FinanceFilters from '../components/FinanceFilters';
import ReconciliationTable from '../components/ReconciliationTable';
import { useReconciliationList } from '../hooks/useReconciliationList';

const ReconciliationPage = () => {
  const { data, total, isLoading, params, updateParams, refetch } = useReconciliationList();

  const handleReset = () => {
    updateParams({ search: '', status: '', page: 1 });
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Finance Reconciliation"
        subtitle="Track mismatches and verification issues between enrollments, transactions, and payouts."
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={refetch}>
              <RefreshCw size={14} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
            </Button>
            <Button variant="primary" size="sm">
              <Download size={14} className="mr-2" /> Export Exceptions
            </Button>
          </div>
        }
      />

      <div className="space-y-6">
        {/* Quick Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FinanceSummaryCard title="Matched Records" value={12540} icon="CheckCircle" color="success" />
          <FinanceSummaryCard title="Mismatches" value={18} icon="SearchX" color="danger" />
          <FinanceSummaryCard title="Pending Review" value={45} icon="Clock" color="warning" />
          <FinanceSummaryCard title="Resolved" value={156} icon="ShieldCheck" color="primary" />
        </div>

        <FinanceFilters 
          filters={params} 
          onFilterChange={updateParams} 
          onReset={handleReset} 
          type="reconciliation"
        />

        <ReconciliationTable 
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

export default ReconciliationPage;
