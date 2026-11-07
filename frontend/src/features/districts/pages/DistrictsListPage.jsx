import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Map, Activity, ShieldCheck, ShieldAlert, TrendingUp, Download, RefreshCw } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import DistrictSummaryCard from '../components/DistrictSummaryCard';
import DistrictFilters from '../components/DistrictFilters';
import DistrictTable from '../components/DistrictTable';
import Button from '../../../components/ui/Button';
import { useDistrictsList, useToggleDistrictStatus } from '../hooks/useDistrictsList';
import { DISTRICT_STATUS, DISTRICT_PERFORMANCE } from '../constants/district.constants';

const DistrictsListPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    managerType: '',
    performance: '',
  });

  const { data, isLoading, isFetching, refetch } = useDistrictsList(filters);
  const toggleStatusMutation = useToggleDistrictStatus();

  const districts = data?.data || [];
  
  // Stats calculation
  const stats = useMemo(() => {
    return {
      total: districts.length,
      active: districts.filter(d => d.status === DISTRICT_STATUS.ACTIVE).length,
      unassigned: districts.filter(d => !d.manager).length,
      highPerf: districts.filter(d => d.performance === DISTRICT_PERFORMANCE.HIGH).length,
    };
  }, [districts]);

  const handleResetFilters = () => {
    setFilters({
      search: '',
      status: '',
      managerType: '',
      performance: '',
    });
  };

  const handleToggleStatus = (id) => {
    toggleStatusMutation.mutate(id);
  };

  return (
    <PageContainer>
      <PageHeader 
        title="District Management" 
        subtitle="Manage geographical operational units, assign managers, and monitor district-level performance metrics."
        actions={(
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => refetch()} isLoading={isFetching}>
              <RefreshCw className={cn("h-4 w-4 mr-2", isFetching && "animate-spin")} />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" onClick={() => navigate('/admin/districts/create')}>
              <Plus className="h-4 w-4 mr-2" />
              Create District
            </Button>
          </div>
        )}
      />

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <DistrictSummaryCard
          label="Total Districts"
          value={stats.total}
          icon={Map}
          color="primary"
        />
        <DistrictSummaryCard
          label="Active Units"
          value={stats.active}
          icon={ShieldCheck}
          color="success"
        />
        <DistrictSummaryCard
          label="High Performing"
          value={stats.highPerf}
          icon={TrendingUp}
          color="info"
        />
        <DistrictSummaryCard
          label="Unassigned"
          value={stats.unassigned}
          icon={ShieldAlert}
          color="warning"
        />
      </div>

      {/* Filters */}
      <DistrictFilters 
        filters={filters} 
        onFilterChange={setFilters} 
        onReset={handleResetFilters} 
      />

      {/* Main Table */}
      <DistrictTable
        districts={districts}
        isLoading={isLoading}
        onView={(id) => navigate(`/admin/districts/${id}`)}
        onEdit={(id) => navigate(`/admin/districts/${id}/edit`)}
        onToggleStatus={handleToggleStatus}
      />
    </PageContainer>
  );
};

// Internal utility for consistency
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default DistrictsListPage;
