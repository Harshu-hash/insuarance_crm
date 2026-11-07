import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Plus, Download, RefreshCw } from 'lucide-react';
import PolicySummaryCard from '../components/PolicySummaryCard';
import PolicyFilters from '../components/PolicyFilters';
import PolicyTable from '../components/PolicyTable';
import { usePoliciesList } from '../hooks/usePoliciesList';

const PoliciesListPage = () => {
  const navigate = useNavigate();
  const {
    policies,
    summary,
    loading,
    filters,
    updateFilters,
    refresh
  } = usePoliciesList();

  const handleReset = () => {
    updateFilters({
      search: '',
      status: '',
      type: '',
    });
  };

  return (
    <PageContainer>
      <PageHeader
        title="Policies"
        subtitle="Manage insurance policy configuration, premium rules, claim thresholds, and eligibility settings."
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
            <Button 
              variant="primary" 
              size="sm" 
              icon={<Plus className="h-4 w-4" />}
              onClick={() => navigate('/admin/policies/create')}
            >
              Create Policy
            </Button>
          </div>
        }
      />

      <PolicySummaryCard summary={summary} loading={loading} />

      <PolicyFilters 
        filters={filters} 
        onFilterChange={updateFilters} 
        onReset={handleReset} 
      />

      <PolicyTable policies={policies} loading={loading} />
    </PageContainer>
  );
};

export default PoliciesListPage;
