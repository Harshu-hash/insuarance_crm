import React from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw } from 'lucide-react';
import EnrollmentSummaryCard from '../components/EnrollmentSummaryCard';
import EnrollmentFilters from '../components/EnrollmentFilters';
import EnrollmentTable from '../components/EnrollmentTable';
import { useEnrollmentsList } from '../hooks/useEnrollmentsList';

const EnrollmentsListPage = () => {
  const {
    enrollments,
    summary,
    loading,
    filters,
    updateFilters,
    refresh
  } = useEnrollmentsList();

  const handleReset = () => {
    updateFilters({
      search: '',
      districtId: '',
      blockId: '',
      schoolId: '',
      paymentStatus: '',
      policyStatus: '',
    });
  };

  return (
    <PageContainer>
      <PageHeader
        title="Enrollments"
        subtitle="Track student insurance enrollments, policy activation, premium status, and incentive attribution."
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
              variant="primary" 
              size="sm" 
              icon={<Download className="h-4 w-4" />}
            >
              Export Records
            </Button>
          </div>
        }
      />

      <EnrollmentSummaryCard summary={summary} loading={loading} />

      <EnrollmentFilters 
        filters={filters} 
        onFilterChange={updateFilters} 
        onReset={handleReset} 
      />

      <EnrollmentTable enrollments={enrollments} loading={loading} />
      
      {/* Pagination Placeholder */}
      {!loading && enrollments.length > 0 && (
        <div className="mt-6 flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-900">{enrollments.length}</span> results
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default EnrollmentsListPage;
