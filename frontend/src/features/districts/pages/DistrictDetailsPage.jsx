import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ChevronLeft, Edit2, Globe, Calendar, Loader2, 
  Layers, School, Users, Activity, Banknote, 
  MapPin, ShieldCheck, ListTree, History,
  TrendingUp, ArrowUpRight, ShieldAlert,
  ClipboardCheck, Building2
} from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import DistrictStatusBadge from '../components/DistrictStatusBadge';
import DistrictPerformanceCard from '../components/DistrictPerformanceCard';
import DistrictFinancialCard from '../components/DistrictFinancialCard';
import DistrictClaimsCard from '../components/DistrictClaimsCard';
import { 
  DistrictBlocksPreview, 
  DistrictSchoolsPreview, 
  DistrictUsersPreview 
} from '../components/DistrictLinkedEntitiesCard';
import { useDistrictDetails } from '../hooks/useDistrictDetails';
import { cn } from '../../../utils/cn';

const DistrictDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: districtData, isLoading, error } = useDistrictDetails(id);

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !districtData?.data) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h2 className="text-xl font-bold text-text-primary">District not found</h2>
          <p className="text-text-secondary mt-2">The requested district details could not be retrieved.</p>
          <Button className="mt-6" onClick={() => navigate('/admin/districts')}>
            Back to Districts
          </Button>
        </div>
      </PageContainer>
    );
  }

  const district = districtData.data;
  const metrics = district.metrics;

  // Mock performance trend data
  const performanceTrend = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
  ];

  // Mock linked entities
  const linkedBlocksPreview = [
    { name: 'Bakshi Ka Talab', schoolsCount: 18 },
    { name: 'Chinhat', schoolsCount: 15 },
    { name: 'Sarojini Nagar', schoolsCount: 22 },
  ];

  const linkedSchoolsPreview = [
    { name: 'Primary School A', enrollmentCount: 342 },
    { name: 'Model High School B', enrollmentCount: 856 },
    { name: 'Kanya Pathshala C', enrollmentCount: 210 },
  ];

  return (
    <PageContainer className="bg-slate-50/50 min-h-screen pb-20">
      {/* 1. COMPACT UNIFIED HEADER */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-text-secondary mb-1">
            <button 
              onClick={() => navigate('/admin/districts')}
              className="p-1 hover:bg-white rounded-md transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest">District Central / {district.region}</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-black text-text-primary tracking-tight">{district.name}</h1>
            <code className="text-[11px] font-mono bg-white border border-border text-slate-500 px-2 py-0.5 rounded shadow-sm">
              #{district.code}
            </code>
            <DistrictStatusBadge status={district.status} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="bg-white">
            <Activity className="h-4 w-4 mr-2" />
            Operational Log
          </Button>
          <Button size="sm" onClick={() => navigate(`/admin/districts/${id}/edit`)}>
            <Edit2 className="h-4 w-4 mr-2" />
            Edit District
          </Button>
        </div>
      </div>

      {/* 2. KEY METRICS STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        <MetricCard label="Blocks" value={metrics.totalBlocks} icon={Layers} color="blue" />
        <MetricCard label="Schools" value={metrics.totalSchools} icon={School} color="purple" />
        <MetricCard label="Registered Students" value={metrics.totalStudents.toLocaleString()} icon={Users} color="indigo" />
        <MetricCard 
          label="Enrollment Coverage" 
          value={`${(metrics.activeEnrollments / metrics.totalStudents * 100).toFixed(0)}%`} 
          icon={ShieldCheck} 
          color="emerald" 
          trend="+5%"
        />
        <MetricCard label="District Health" value="Stable" icon={Activity} color="amber" />
      </div>

      {/* 3. OPTIMIZED 3-COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT COLUMN: IDENTITIY & PERSONNEL (3/12) */}
        <div className="lg:col-span-3 space-y-5">
          <section className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Geography & Profile</h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-secondary uppercase">Operational Region</p>
                <p className="text-sm font-bold text-text-primary">{district.region}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-secondary uppercase">Established Date</p>
                <p className="text-sm font-bold text-text-primary flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {new Date(district.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-secondary uppercase">Last Sync</p>
                <p className="text-sm font-bold text-emerald-600 flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Synced 2h ago
                </p>
              </div>
              <div className="pt-2">
                <p className="text-[10px] font-bold text-text-secondary uppercase mb-2">Internal Note</p>
                <p className="text-[11px] text-text-secondary leading-relaxed bg-slate-50 p-2 rounded-lg italic border border-slate-100">
                  {district.description || "Primary operational unit for the Braj central cluster. Oversees high student density blocks."}
                </p>
              </div>
            </div>
          </section>

          <DistrictUsersPreview 
            manager={district.manager} 
            blockManagersCount={metrics.totalBlocks} 
            othersCount={12} 
            onViewAll={() => {}} 
          />
        </div>

        {/* CENTER COLUMN: PERFORMANCE & FINANCE (6/12) */}
        <div className="lg:col-span-6 space-y-5">
          <DistrictPerformanceCard 
            data={performanceTrend} 
            healthStatus={district.performance === 'high_performing' ? 'high' : 'stable'} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <DistrictFinancialCard metrics={metrics} />
            <DistrictClaimsCard metrics={metrics} />
          </div>
        </div>

        {/* RIGHT COLUMN: ENTITIES & ACTIONS (3/12) */}
        <div className="lg:col-span-3 space-y-5">
          <DistrictBlocksPreview 
            blocks={linkedBlocksPreview} 
            totalCount={metrics.totalBlocks} 
            onViewAll={() => {}} 
          />
          
          <DistrictSchoolsPreview 
            schools={linkedSchoolsPreview} 
            totalCount={metrics.totalSchools} 
            onViewAll={() => {}} 
          />

          {/* QUICK ADMINISTRATIVE ACTIONS */}
          <div className="bg-white rounded-2xl border border-border p-4 shadow-sm border-t-4 border-t-primary">
            <h4 className="text-[10px] font-bold text-text-secondary uppercase mb-4 tracking-widest text-center">Protocol Controls</h4>
            <div className="space-y-2">
              <ActionButton 
                label="Generate Invoice" 
                sub="Premium Bundle" 
                icon={Banknote} 
                color="emerald" 
              />
              <ActionButton 
                label="Audit History" 
                sub="View Activity" 
                icon={ListTree} 
                color="blue" 
              />
              <ActionButton 
                label="Export Data" 
                sub="Full Dataset" 
                icon={TrendingUp} 
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
const MetricCard = ({ label, value, icon: Icon, color = 'blue', trend }) => {
  const themes = {
    blue: 'text-blue-600 bg-blue-50 border-blue-100',
    emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    purple: 'text-purple-600 bg-purple-50 border-purple-100',
    amber: 'text-amber-600 bg-amber-50 border-amber-100',
  };

  return (
    <div className="bg-white p-4 rounded-2xl border border-border shadow-sm group hover:border-primary/30 transition-all">
      <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center border mb-3 transition-transform group-hover:scale-110", themes[color])}>
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{label}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl font-black text-text-primary">{value}</h3>
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

export default DistrictDetailsPage;
