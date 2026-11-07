import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ChevronLeft, Edit2, Calendar, Loader2, 
  School, Users, Activity, Banknote, 
  MapPin, ShieldCheck, ListTree, History,
  Building2, TrendingUp, ArrowUpRight, ClipboardCheck,
  Mail, Phone, Info
} from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { SchoolStatusBadge, SchoolTypeBadge } from '../components/SchoolBadges';
import SchoolPerformanceCard from '../components/SchoolPerformanceCard';
import SchoolClaimsCard from '../components/SchoolClaimsCard';
import SchoolFinanceCard from '../components/SchoolFinanceCard';
import { 
  SchoolStudentsPreview, 
  SchoolEnrollmentsPreview, 
  SchoolUsersPreview 
} from '../components/SchoolLinkedEntitiesCard';
import { useSchoolDetails } from '../hooks/useSchoolsList';
import { cn } from '../../../utils/cn';

const SchoolDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: schoolData, isLoading, error } = useSchoolDetails(id);

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !schoolData?.data) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h2 className="text-xl font-bold text-text-primary">School not found</h2>
          <p className="text-text-secondary mt-2">The institutional record for this unit is currently unavailable.</p>
          <Button className="mt-6" onClick={() => navigate('/admin/schools')}>
            Back to Inventory
          </Button>
        </div>
      </PageContainer>
    );
  }

  const school = schoolData.data;
  const metrics = school.metrics;

  // Mock performance trend data
  const performanceTrend = [
    { name: 'Jan', value: 45 },
    { name: 'Feb', value: 82 },
    { name: 'Mar', value: 156 },
    { name: 'Apr', value: 210 },
  ];

  // Mock previews
  const studentsPreview = [
    { id: 'std-1', name: 'Aarav Kumar', class: '10-A' },
    { id: 'std-2', name: 'Isha Singh', class: '9-C' },
    { id: 'std-3', name: 'Rohan Gupta', class: '12-B' },
  ];

  const enrollmentsPreview = [
    { studentName: 'Aarav Kumar', policyNo: 'POL-330101' },
    { studentName: 'Isha Singh', policyNo: 'POL-330102' },
    { studentName: 'Rohan Gupta', policyNo: 'POL-330103' },
  ];

  return (
    <PageContainer className="bg-slate-50/50 min-h-screen pb-20">
      {/* 1. INSTITUTIONAL HEADER */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-text-secondary mb-1">
            <button 
              onClick={() => navigate('/admin/schools')}
              className="p-1 hover:bg-white rounded-md transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              Institutions / <MapPin className="h-3 w-3" /> {school.districtName} / {school.blockName}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-black text-text-primary tracking-tight">{school.name}</h1>
            <code className="text-[11px] font-mono bg-white border border-border text-slate-500 px-2 py-0.5 rounded shadow-sm">
              #{school.code}
            </code>
            <SchoolStatusBadge status={school.status} />
          </div>
          <div className="flex items-center gap-2 mt-1">
             <SchoolTypeBadge type={school.schoolType} />
             <span className="text-[10px] text-text-secondary font-medium">Mapped to Block Operational Unit</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-right">
          <Button variant="outline" size="sm" className="bg-white shadow-sm border-slate-200">
            <ListTree className="h-4 w-4 mr-2" />
            Mapping History
          </Button>
          <Button size="sm" onClick={() => navigate(`/admin/schools/${id}/edit`)}>
            <Edit2 className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* 2. KEY METRICS STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        <MetricCard label="Total Students" value={metrics.totalStudents} icon={Users} color="indigo" />
        <MetricCard label="Active Policies" value={metrics.activeEnrollments} icon={ShieldCheck} color="emerald" trend="+15%" />
        <MetricCard label="Claims Issued" value={metrics.claimsCount} icon={ClipboardCheck} color="amber" />
        <MetricCard label="Premium Collected" value={`₹${metrics.premiumCollected.toLocaleString()}`} icon={Banknote} color="primary" />
        <MetricCard label="Participation" value={`${((metrics.activeEnrollments/metrics.totalStudents)*100).toFixed(0)}%`} icon={Activity} color="purple" />
      </div>

      {/* 3. DASHBOARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT COLUMN: IDENTITY & CONTACT (3/12) */}
        <div className="lg:col-span-3 space-y-5">
          <section className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Institutional Identity</h3>
            </div>
            <div className="p-5 space-y-5">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">School Head</p>
                <p className="text-sm font-bold text-text-primary">{school.contactPerson}</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Digital Contact</p>
                <div className="flex items-center gap-2 text-[11px] font-bold text-text-primary">
                   <Phone className="h-3 w-3 text-slate-400" />
                   {school.contactMobile || 'Not provided'}
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-text-primary">
                   <Mail className="h-3 w-3 text-slate-400" />
                   {school.contactEmail || 'Not provided'}
                </div>
              </div>
              <div className="pt-2">
                <p className="text-[10px] font-bold text-text-secondary uppercase mb-2">Location Summary</p>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
                   <p className="text-[11px] text-text-primary font-bold italic mb-1">{school.address?.line1}</p>
                   <p className="text-[10px] text-text-secondary font-medium">{school.address?.city}, {school.address?.pincode}</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-[10px] font-bold text-text-secondary uppercase mb-2">Initialized On</p>
                <p className="text-xs font-bold text-text-primary flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {new Date(school.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </section>

          <SchoolUsersPreview 
            coordinator={school.coordinator} 
            othersCount={metrics.totalStudents > 200 ? 2 : 0} 
            onViewAll={() => {}} 
          />
        </div>

        {/* CENTER COLUMN: PERFORMANCE & FINANCE (6/12) */}
        <div className="lg:col-span-6 space-y-5">
          <SchoolPerformanceCard 
            data={performanceTrend} 
            healthStatus={metrics.activeEnrollments > 300 ? 'high' : 'stable'} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SchoolClaimsCard metrics={metrics} />
            <SchoolFinanceCard metrics={metrics} />
          </div>

          <section className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4">
             <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500">
                <Info className="h-5 w-5" />
             </div>
             <div>
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-1">Administrative Notes</h4>
                <p className="text-[11px] text-text-secondary leading-relaxed italic">
                  {school.description || "The institution is showing consistent growth in student protection coverage. Coordinator indicates potential for 100% participation by Q3."}
                </p>
             </div>
          </section>
        </div>

        {/* RIGHT COLUMN: ENTITIES & ACTIONS (3/12) */}
        <div className="lg:col-span-3 space-y-5">
          <SchoolStudentsPreview 
            students={studentsPreview} 
            totalCount={metrics.totalStudents} 
            onViewAll={() => navigate('/admin/students')} 
            onStudentClick={(id) => navigate(`/admin/students/${id}`)}
          />
          
          <SchoolEnrollmentsPreview 
            enrollments={enrollmentsPreview} 
            totalCount={metrics.activeEnrollments} 
            onViewAll={() => {}} 
          />

          <div className="bg-white rounded-2xl border border-border p-4 shadow-sm border-t-4 border-t-emerald-500">
            <h4 className="text-[10px] font-bold text-text-secondary uppercase mb-4 tracking-widest text-center">Institutional Protocols</h4>
            <div className="space-y-2">
              <ActionButton 
                label="Generate Policy" 
                sub="Manual Entry (Super)" 
                icon={ShieldCheck} 
                color="emerald" 
              />
              <ActionButton 
                label="Audit Registry" 
                sub="Verify Student Data" 
                icon={History} 
                color="blue" 
              />
              <ActionButton 
                label="Contact Head" 
                sub="Open Mail Interface" 
                icon={Mail} 
                color="slate" 
              />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

// UI COMPONENT: Metric Card
const MetricCard = ({ label, value, icon: Icon, color = 'primary', trend }) => {
  const themes = {
    primary: 'text-primary bg-primary/5 border-primary/20',
    emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    purple: 'text-purple-600 bg-purple-50 border-purple-100',
    amber: 'text-amber-600 bg-amber-50 border-amber-100',
  };

  return (
    <div className="bg-white p-4 rounded-2xl border border-border shadow-sm group hover:border-primary/30 transition-all">
      <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center border mb-3 transition-transform group-hover:scale-110 shadow-sm", themes[color])}>
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{label}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl font-black text-text-primary">{typeof value === 'number' ? value.toLocaleString() : value}</h3>
          {trend && <span className="text-[9px] font-bold text-emerald-600">{trend}</span>}
        </div>
      </div>
    </div>
  );
};

// UI COMPONENT: Action Button
const ActionButton = ({ label, sub, icon: Icon, color }) => {
  const colors = {
    emerald: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    slate: 'bg-slate-50 text-slate-600',
  };
  
  return (
    <button className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all group text-left">
      <div className="flex items-center gap-3">
        <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center", colors[color])}>
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs font-bold text-text-primary uppercase tracking-tight leading-none mb-0.5">{label}</p>
          <p className="text-[10px] text-text-secondary">{sub}</p>
        </div>
      </div>
      <ChevronLeft className="h-4 w-4 rotate-180 text-slate-300 group-hover:text-primary transition-colors" />
    </button>
  );
};

export default SchoolDetailsPage;
