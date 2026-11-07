import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, Plus, Download, RefreshCw, 
  CheckCircle2, AlertCircle, Ban, TrendingUp,
  LineChart, Clock, Users
} from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import SchoolTable from '../components/SchoolTable';
import SchoolFilters from '../components/SchoolFilters';
import SchoolSummaryCard from '../components/SchoolSummaryCard';
import { useSchoolsList, useToggleSchoolStatus } from '../hooks/useSchoolsList';
import { useDistrictsList } from '../../districts/hooks/useDistrictsList';
import { useBlocksList } from '../../blocks/hooks/useBlocksList';
import { SCHOOL_STATUS } from '../constants/school.constants';
import { toast } from 'sonner';

const SchoolsListPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    search: '',
    districtId: '',
    blockId: '',
    status: '',
    schoolType: '',
    activity: '',
  });

  const { data: schoolsData, isLoading, refetch } = useSchoolsList(filters);
  const { data: districtsData } = useDistrictsList();
  const { data: blocksData, isLoading: isBlocksLoading } = useBlocksList({ 
    districtId: filters.districtId 
  });
  
  const toggleStatusMutation = useToggleSchoolStatus();

  const districtOptions = useMemo(() => {
    return (districtsData?.data || []).map(d => ({
      value: d.id,
      label: d.name
    }));
  }, [districtsData]);

  const blockOptions = useMemo(() => {
    return (blocksData?.data || []).map(b => ({
      value: b.id,
      label: b.name
    }));
  }, [blocksData]);

  const handleToggleStatus = (id) => {
    toggleStatusMutation.mutate(id, {
      onSuccess: () => {
        toast.success('School operational status toggled');
      }
    });
  };

  const handleReset = () => {
    setFilters({
      search: '',
      districtId: '',
      blockId: '',
      status: '',
      schoolType: '',
      activity: '',
    });
  };

  return (
    <PageContainer className="bg-slate-50/50 min-h-screen">
      <PageHeader 
        title="Institutional Inventory" 
        subtitle="Manage schools as primary enrollment units. Monitor school-level coverage, institutional personnel, and registration performance."
        actions={
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="bg-white" onClick={() => refetch()}>
              <RefreshCw className={isLoading ? "h-4 w-4 mr-2 animate-spin" : "h-4 w-4 mr-2"} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="bg-white">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" onClick={() => navigate('/admin/schools/create')}>
              <Plus className="h-4 w-4 mr-2" />
              Register school
            </Button>
          </div>
        }
      />

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SchoolSummaryCard 
          label="Total Institutions" 
          value={schoolsData?.total || 0} 
          icon={Building2} 
          color="primary"
          subValue="Active Registry"
        />
        <SchoolSummaryCard 
          label="Operational" 
          value={(schoolsData?.data || []).filter(s => s.status === SCHOOL_STATUS.ACTIVE).length} 
          icon={CheckCircle2} 
          color="success"
          subValue="Ready for Enrollment"
          trend={12}
        />
        <SchoolSummaryCard 
          label="High Activity" 
          value={(schoolsData?.data || []).filter(s => s.metrics.activeEnrollments > 300).length} 
          icon={TrendingUp} 
          color="indigo"
          subValue="Top Performers"
        />
        <SchoolSummaryCard 
          label="Pending Coverage" 
          value={(schoolsData?.data || []).filter(s => s.metrics.activeEnrollments === 0).length} 
          icon={AlertCircle} 
          color="warning"
          subValue="Coverage Gaps Found"
        />
      </div>

      <SchoolFilters 
        filters={filters} 
        onFilterChange={setFilters}
        onReset={handleReset}
        districtOptions={districtOptions}
        blockOptions={blockOptions}
        isBlocksLoading={isBlocksLoading}
      />

      <SchoolTable 
        schools={schoolsData?.data || []} 
        isLoading={isLoading}
        onView={(id) => navigate(`/admin/schools/${id}`)}
        onEdit={(id) => navigate(`/admin/schools/${id}/edit`)}
        onToggleStatus={handleToggleStatus}
      />
    </PageContainer>
  );
};

export default SchoolsListPage;
