import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, Layers, ShieldCheck, TrendingUp, ShieldAlert, 
  Download, RefreshCw, MapPin
} from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import BlockSummaryCard from '../components/BlockSummaryCard';
import BlockFilters from '../components/BlockFilters';
import BlockTable from '../components/BlockTable';
import Button from '../../../components/ui/Button';
import { useBlocksList, useToggleBlockStatus } from '../hooks/useBlocksList';
import { useDistrictsList } from '../../districts/hooks/useDistrictsList';
import { BLOCK_STATUS, BLOCK_PERFORMANCE } from '../constants/block.constants';
import { cn } from '../../../utils/cn';

const BlocksListPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    search: '',
    districtId: '',
    status: '',
    managerType: '',
    performance: '',
  });

  const { data, isLoading, isFetching, refetch } = useBlocksList(filters);
  const { data: districtsData } = useDistrictsList();
  const toggleStatusMutation = useToggleBlockStatus();

  const blocks = data?.data || [];
  
  // Transform districts for filter options
  const districtOptions = useMemo(() => {
    return (districtsData?.data || []).map(d => ({
      value: d.id,
      label: d.name
    }));
  }, [districtsData]);

  // Stats calculation
  const stats = useMemo(() => {
    return {
      total: blocks.length,
      active: blocks.filter(b => b.status === BLOCK_STATUS.ACTIVE).length,
      unassigned: blocks.filter(b => !b.manager).length,
      highPerf: blocks.filter(b => b.performance === BLOCK_PERFORMANCE.HIGH).length,
      totalIncentive: blocks.reduce((acc, b) => acc + (b.metrics.incentiveGenerated || 0), 0),
    };
  }, [blocks]);

  const handleResetFilters = () => {
    setFilters({
      search: '',
      districtId: '',
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
        title="Blocks Inventory" 
        subtitle="Manage sub-district execution units, school mappings, and field manager (BM) performance."
        actions={(
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => refetch()} isLoading={isFetching} className="bg-white">
              <RefreshCw className={cn("h-4 w-4 mr-2", isFetching && "animate-spin")} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="bg-white">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button size="sm" onClick={() => navigate('/admin/blocks/create')}>
              <Plus className="h-4 w-4 mr-2" />
              Create Block
            </Button>
          </div>
        )}
      />

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <BlockSummaryCard
          label="Total Blocks"
          value={stats.total}
          icon={Layers}
          color="primary"
          subValue="Execution Units"
        />
        <BlockSummaryCard
          label="Active Operations"
          value={stats.active}
          icon={ShieldCheck}
          color="success"
          subValue={`${((stats.active/stats.total)||0 * 100).toFixed(0)}% Capacity`}
        />
        <BlockSummaryCard
          label="High Efficiency"
          value={stats.highPerf}
          icon={TrendingUp}
          color="info"
          subValue="Optimal Performance"
        />
        <BlockSummaryCard
          label="Field Gap"
          value={stats.unassigned}
          icon={ShieldAlert}
          color="warning"
          subValue="Managers Required"
        />
      </div>

      {/* Filters */}
      <BlockFilters 
        filters={filters} 
        onFilterChange={setFilters} 
        onReset={handleResetFilters}
        districtOptions={districtOptions}
      />

      {/* Main Table */}
      <BlockTable
        blocks={blocks}
        isLoading={isLoading}
        onView={(id) => navigate(`/admin/blocks/${id}`)}
        onEdit={(id) => navigate(`/admin/blocks/${id}/edit`)}
        onToggleStatus={handleToggleStatus}
      />
    </PageContainer>
  );
};

export default BlocksListPage;
