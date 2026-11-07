import React, { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw } from 'lucide-react';
import FinanceSummaryCard from '../components/FinanceSummaryCard';
import FinanceFilters from '../components/FinanceFilters';
import ClaimPayoutTable from '../components/ClaimPayoutTable';
import PayoutDetailDrawer from '../components/PayoutDetailDrawer';
import { useClaimPayouts } from '../hooks/useClaimPayouts';

const PayoutsPage = () => {
  const { data, total, isLoading, params, updateParams, refetch } = useClaimPayouts();
  const [selectedPayout, setSelectedPayout] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleViewDetails = (payout) => {
    setSelectedPayout(payout);
    setIsDrawerOpen(true);
  };

  const handleReset = () => {
    updateParams({ search: '', status: '', page: 1 });
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Claim Payouts"
        subtitle="Manage and track hospital bill settlements and approved claim payouts."
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={refetch}>
              <RefreshCw size={14} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
            </Button>
            <Button variant="primary" size="sm">
              <Download size={14} className="mr-2" /> Export Payouts
            </Button>
          </div>
        }
      />

      <div className="space-y-6">
        {/* Quick Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FinanceSummaryCard title="Approved Claims" value={8500000} icon="FileCheck" color="primary" />
          <FinanceSummaryCard title="Payouts Pending" value={1250000} icon="Clock" color="warning" />
          <FinanceSummaryCard title="Payouts Completed" value={7250000} icon="CheckCircle2" color="success" />
          <FinanceSummaryCard title="Payouts Failed" value={45000} icon="AlertCircle" color="danger" />
        </div>

        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center space-x-4">
          <div className="p-2 bg-white rounded-lg text-primary shadow-sm">
            <span className="text-xs font-black">INFO</span>
          </div>
          <p className="text-xs text-blue-800 font-medium">
            Claim payout is for eligible hospital bill payment only. No maturity or cash benefit payout is processed through this module.
          </p>
        </div>

        <FinanceFilters 
          filters={params} 
          onFilterChange={updateParams} 
          onReset={handleReset} 
          type="payouts"
        />

        <ClaimPayoutTable 
          data={data} 
          isLoading={isLoading} 
          onViewDetails={handleViewDetails}
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

      <PayoutDetailDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        payout={selectedPayout} 
      />
    </PageContainer>
  );
};

export default PayoutsPage;
