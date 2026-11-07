import React, { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw } from 'lucide-react';
import FinanceSummaryCard from '../components/FinanceSummaryCard';
import FinanceFilters from '../components/FinanceFilters';
import TransactionTable from '../components/TransactionTable';
import TransactionDetailDrawer from '../components/TransactionDetailDrawer';
import { useTransactionsList } from '../hooks/useTransactionsList';

const TransactionsPage = () => {
  const { data, total, isLoading, params, updateParams, refetch } = useTransactionsList();
  const [selectedTxn, setSelectedTxn] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleViewDetails = (txn) => {
    setSelectedTxn(txn);
    setIsDrawerOpen(true);
  };

  const handleReset = () => {
    updateParams({ search: '', status: '', mode: '', page: 1 });
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Premium Transactions"
        subtitle="Track and manage all student premium payments and enrollment fees."
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={refetch}>
              <RefreshCw size={14} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
            </Button>
            <Button variant="primary" size="sm">
              <Download size={14} className="mr-2" /> Export CSV
            </Button>
          </div>
        }
      />

      <div className="space-y-6">
        {/* Quick Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FinanceSummaryCard title="Total Volume" value={12540000} icon="Banknote" color="primary" />
          <FinanceSummaryCard title="Successful" value={4250} icon="CheckCircle2" color="success" subtitle="Transactions" />
          <FinanceSummaryCard title="Pending" value={128} icon="Clock" color="warning" subtitle="Transactions" />
          <FinanceSummaryCard title="Failed" value={45} icon="AlertCircle" color="danger" subtitle="Transactions" />
        </div>

        <FinanceFilters 
          filters={params} 
          onFilterChange={updateParams} 
          onReset={handleReset} 
          type="transactions"
        />

        <TransactionTable 
          data={data} 
          isLoading={isLoading} 
          onViewDetails={handleViewDetails}
        />

        {/* Pagination Placeholder */}
        {!isLoading && data.length > 0 && (
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-500">
              Showing <span className="font-bold text-slate-900">{data.length}</span> of <span className="font-bold text-slate-900">{total}</span> transactions
            </p>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                disabled={params.page === 1}
                onClick={() => updateParams({ page: params.page - 1 })}
              >
                Previous
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                disabled={data.length < params.limit}
                onClick={() => updateParams({ page: params.page + 1 })}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>

      <TransactionDetailDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        transaction={selectedTxn} 
      />
    </PageContainer>
  );
};

export default TransactionsPage;
