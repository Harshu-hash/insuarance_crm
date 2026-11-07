import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ChevronLeft, Edit2, Loader2, User, 
  ShieldCheck, FileText, AlertTriangle, 
  MapPin, GraduationCap, History, Smartphone
} from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { StudentStatusBadge, StudentPolicyBadge } from '../components/StudentBadges';
import { StudentProfileCard, StudentGuardianCard } from '../components/StudentIdentityCards';
import { StudentAcademicCard, StudentMappingCard } from '../components/StudentContextCards';
import { StudentEnrollmentSummaryCard, StudentClaimsSummaryCard, StudentFlagsCard } from '../components/StudentStatusCards';
import { StudentTimelineCard, StudentDocumentsCard, StudentNotesSection } from '../components/StudentUtilityCards';
import { useStudentDetails, useStudentSummary } from '../hooks/useStudentsList';

const StudentDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data: studentData, isLoading: isDetailsLoading, error } = useStudentDetails(id);
  const { data: summaryData, isLoading: isSummaryLoading } = useStudentSummary(id);

  if (isDetailsLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !studentData?.data) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h2 className="text-xl font-bold text-text-primary">Insured record not found</h2>
          <p className="text-text-secondary mt-2 text-center max-w-sm">
            The student profile you are looking for is not in the system registry. It might have been archived or moved.
          </p>
          <Button className="mt-6" onClick={() => navigate('/admin/students')}>
            Back to Registry
          </Button>
        </div>
      </PageContainer>
    );
  }

  const student = studentData.data;
  const summary = summaryData?.data || {};

  return (
    <PageContainer className="bg-slate-50/50 min-h-screen pb-20">
      {/* 1. PROFILE HEADER */}
      <div className="mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-text-secondary mb-1">
            <button 
              onClick={() => navigate('/admin/students')}
              className="p-1 hover:bg-white rounded-md transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
              Management / Students / Profile
            </span>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <h1 className="text-3xl font-black text-text-primary tracking-tight">{student.name}</h1>
            <div className="flex items-center gap-2">
               <StudentStatusBadge status={student.status} />
               <StudentPolicyBadge status={student.policyStatus} />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold text-text-secondary pt-1">
             <div className="flex items-center gap-1.5 uppercase tracking-tighter">
                <GraduationCap className="h-3.5 w-3.5 text-indigo-500" />
                Class {student.class}
             </div>
             <div className="h-3 w-px bg-slate-300" />
             <div className="flex items-center gap-1.5 uppercase tracking-tighter">
                <MapPin className="h-3.5 w-3.5 text-amber-500" />
                {student.schoolName}
             </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="bg-white shadow-sm">
            <Smartphone className="h-4 w-4 mr-2" />
            Auth Log
          </Button>
          <Button size="sm" onClick={() => navigate(`/admin/students/${id}/edit`)}>
            <Edit2 className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* 2. DASHBOARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT COLUMN: IDENTITY & QUALITY (3/12) */}
        <div className="lg:col-span-3 space-y-5">
          <StudentProfileCard student={student} />
          <StudentFlagsCard student={student} />
          <StudentDocumentsCard />
        </div>

        {/* CENTER COLUMN: CORE CONTEXT & FINANCE (6/12) */}
        <div className="lg:col-span-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             <StudentEnrollmentSummaryCard summary={summary} />
             <StudentClaimsSummaryCard summary={summary} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             <StudentAcademicCard student={student} />
             <StudentMappingCard student={student} />
          </div>

          <StudentNotesSection remarks={student.remarks} />
        </div>

        {/* RIGHT COLUMN: GUARDIAN & HISTORY (3/12) */}
        <div className="lg:col-span-3 space-y-5">
          <StudentGuardianCard student={student} />
          <StudentTimelineCard />
          
          <div className="p-5 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-100 flex flex-col items-center text-center">
             <ShieldCheck className="h-10 w-10 mb-3 opacity-50" />
             <h4 className="text-sm font-black uppercase tracking-wider">Policy Integrity</h4>
             <p className="text-[10px] mt-2 opacity-80 leading-relaxed font-medium">Record is currently under institutional supervision. Mapping verified by Block Manager.</p>
             <button className="mt-4 text-[10px] font-black uppercase text-white/50 hover:text-white transition-colors">Digital ID Card &gt;</button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default StudentDetailsPage;
