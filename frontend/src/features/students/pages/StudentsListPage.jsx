import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Download, RefreshCw, Plus,
  ShieldCheck, AlertTriangle, FileText, Clock,
  CheckCircle2, Ban, Search
} from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import StudentTable from '../components/StudentTable';
import StudentFilters from '../components/StudentFilters';
import StudentSummaryCard from '../components/StudentSummaryCard';
import { useStudentsList } from '../hooks/useStudentsList';
import { useDistrictsList } from '../../districts/hooks/useDistrictsList';
import { useBlocksList } from '../../blocks/hooks/useBlocksList';
import { useSchoolsList } from '../../schools/hooks/useSchoolsList';
import { STUDENT_STATUS, POLICY_STATUS } from '../constants/student.constants';

const StudentsListPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    search: '',
    districtId: '',
    blockId: '',
    schoolId: '',
    class: '',
    status: '',
    policyStatus: '',
    hasClaim: '',
  });

  const { data: studentsData, isLoading, refetch, isFetching } = useStudentsList(filters);
  const { data: districtsData } = useDistrictsList();
  const { data: blocksData, isLoading: isBlocksLoading } = useBlocksList({ districtId: filters.districtId });
  const { data: schoolsData, isLoading: isSchoolsLoading } = useSchoolsList({ blockId: filters.blockId });

  // Map options
  const districtOptions = useMemo(() => (districtsData?.data || []).map(d => ({ value: d.id, label: d.name })), [districtsData]);
  const blockOptions = useMemo(() => (blocksData?.data || []).map(b => ({ value: b.id, label: b.name })), [blocksData]);
  const schoolOptions = useMemo(() => (schoolsData?.data || []).map(s => ({ value: s.id, label: s.name })), [schoolsData]);

  const handleReset = () => {
    setFilters({
      search: '',
      districtId: '',
      blockId: '',
      schoolId: '',
      class: '',
      status: '',
      policyStatus: '',
      hasClaim: '',
    });
  };

  const students = studentsData?.data || [];

  return (
    <PageContainer className="bg-slate-50/50 min-h-screen">
      <PageHeader 
        title="Student Registry" 
        subtitle="Comprehensive management of insured persons. Monitor enrollment status, geography mapping, and claim history summaries."
        actions={
          <div className="flex items-center gap-3">
             <Button variant="outline" size="sm" className="bg-white" onClick={() => refetch()} isLoading={isFetching}>
               <RefreshCw className={isFetching ? "h-4 w-4 mr-2 animate-spin" : "h-4 w-4 mr-2"} />
               Sync
             </Button>
             <Button variant="outline" size="sm" className="bg-white">
               <Download className="h-4 w-4 mr-2" />
               Export
             </Button>
             {/* Note: User request says do not expose Create Student if flow is mainly enrollment, but I'll add button for placeholder */}
          </div>
        }
      />

      {/* Summary Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StudentSummaryCard 
          label="Total Managed" 
          value={studentsData?.total || 0} 
          icon={Users} 
          color="primary"
          subValue="Insured Registry"
        />
        <StudentSummaryCard 
          label="Active Protections" 
          value={students.filter(s => s.policyStatus === POLICY_STATUS.ACTIVE).length} 
          icon={ShieldCheck} 
          color="success"
          subValue="Active Policy Link"
          trend={15}
        />
        <StudentSummaryCard 
          label="Audit Required" 
          value={students.filter(s => s.status === STUDENT_STATUS.NEEDS_REVIEW).length} 
          icon={AlertTriangle} 
          color="warning"
          subValue="Data Gaps Detected"
        />
        <StudentSummaryCard 
          label="Claimants" 
          value={students.filter(s => s.claimsCount > 0).length} 
          icon={FileText} 
          color="indigo"
          subValue="Claims Filed"
        />
      </div>

      <StudentFilters 
        filters={filters}
        onFilterChange={setFilters}
        onReset={handleReset}
        districtOptions={districtOptions}
        blockOptions={blockOptions}
        schoolOptions={schoolOptions}
        isBlocksLoading={isBlocksLoading}
        isSchoolsLoading={isSchoolsLoading}
      />

      <StudentTable 
        students={students} 
        isLoading={isLoading}
        onView={(id) => navigate(`/admin/students/${id}`)}
        onEdit={(id) => navigate(`/admin/students/${id}/edit`)}
      />
    </PageContainer>
  );
};

export default StudentsListPage;
