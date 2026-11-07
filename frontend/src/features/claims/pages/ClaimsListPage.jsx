import React from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw } from 'lucide-react';
import ClaimSummaryCard from '../components/ClaimSummaryCard';
import ClaimFilters from '../components/ClaimFilters';
import ClaimTable from '../components/ClaimTable';
import { useClaimsList } from '../hooks/useClaimsList';

const ClaimsListPage = () => {
  const {
    claims,
    summary,
    loading,
    filters,
    updateFilters,
    refresh
  } = useClaimsList();

  const handleReset = () => {
    updateFilters({
      search: '',
      status: '',
      payoutStatus: '',
    });
  };

  return (
    <PageContainer>
      <PageHeader
        title="Claims"
        subtitle="Review accident claims, hospital bills, documents, eligibility, and payout status."
        actions={
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              icon={<RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />}
              onClick={refresh}
            >
              Refresh
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              icon={<Download className="h-4 w-4" />}
            >
              Export
            </Button>
          </div>
        }
      />

      <ClaimSummaryCard summary={summary} loading={loading} />

      <ClaimFilters 
        filters={filters} 
        onFilterChange={updateFilters} 
        onReset={handleReset} 
      />

      <ClaimTable claims={claims} loading={loading} />
    </PageContainer>
  );
};

export default ClaimsListPage;
