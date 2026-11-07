import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ChevronLeft, Edit2, Calendar, Loader2, 
  Layers, School, Users, Activity, Banknote, 
  MapPin, ShieldCheck, ListTree, History,
  Building2, TrendingUp, ArrowUpRight, ClipboardCheck
} from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { BlockStatusBadge } from '../components/BlockBadges';
import BlockPerformanceCard from '../components/BlockPerformanceCard';
import BlockClaimsCard from '../components/BlockClaimsCard';
import BlockIncentiveCard from '../components/BlockIncentiveCard';
import { 
  BlockSchoolsPreview, 
  BlockStudentsPreview, 
  BlockUsersPreview 
} from '../components/BlockLinkedEntitiesCard';
import { useBlockDetails } from '../hooks/useBlockDetails';
import { cn } from '../../../utils/cn';

const BlockDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blockData, isLoading, error } = useBlockDetails(id);

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !blockData?.data) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h2 className="text-xl font-bold text-text-primary">Block not found</h2>
          <p className="text-text-secondary mt-2">The requested operational unit details could not be retrieved.</p>
          <Button className="mt-6" onClick={() => navigate('/admin/blocks')}>
            Back to Inventory
          </Button>
        </div>
      </PageContainer>
    );
  }

  const block = blockData.data;
  const metrics = block.metrics;

  // Mock performance trend data
  const performanceTrend = [
    { name: 'Jan', value: 240 },
    { name: 'Feb', value: 180 },
    { name: 'Mar', value: 420 },
    { name: 'Apr', value: 650 },
  ];

  // Mock linked entities
  const schoolsPreview = [
    { name: 'Primary School BKT-1', enrollmentCount: 86 },
    { name: 'Junior High BKT-Center', enrollmentCount: 142 },
    { name: 'Kanya Vidyalaya BKT', enrollmentCount: 54 },
  ];

  const studentsPreview = [
    { name: 'Rahul Sharma', schoolName: 'Primary School BKT-1' },
    { name: 'Sneha Gupta', schoolName: 'Junior High BKT-Center' },
    { name: 'Mohit Kumar', schoolName: 'Kanya Vidyalaya BKT' },
  ];

  return (
    <PageContainer className="bg-slate-50/50 min-h-screen pb-20">
      {/* 1. COMPACT UNIFIED HEADER */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-text-secondary mb-1">
            <button 
              onClick={() => navigate('/admin/blocks')}
              className="p-1 hover:bg-white rounded-md transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Block Execution Layer / District: {block.districtName}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-black text-text-primary tracking-tight">{block.name}</h1>
            <code className="text-[11px] font-mono bg-white border border-border text-slate-500 px-2 py-0.5 rounded shadow-sm">
              #{block.code}
            </code>
            <BlockStatusBadge status={block.status} />
          </div>
        </div>

        <div className="flex items-center gap-3 text-right">
           <div className="hidden md:block mr-2 text-right">
             <p className="text-[9px] font-bold text-text-secondary uppercase tracking-widest leading-none mb-1">Assigned BM</p>
             <p className="text-xs font-black text-primary">{block.manager?.name || 'Unassigned'}</p>
           </div>
          <Button variant="outline" size="sm" className="bg-white shadow-sm">
            <Activity className="h-4 w-4 mr-2" />
            Operational Log
          </Button>
          <Button size="sm" onClick={() => navigate(`/admin/blocks/${id}/edit`)}>
            <Edit2 className="h-4 w-4 mr-2" />
            Edit Block
          </Button>
        </div>
      </div>

      {/* 2. KEY METRICS STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        <MetricCard label="Linked Schools" value={metrics.totalSchools} icon={School} color="purple" />
        <MetricCard label="Student Pool" value={metrics.totalStudents.toLocaleString()} icon={Users} color="indigo" />
        <MetricCard 
          label="Active Protections" 
          value={metrics.activeEnrollments.toLocaleString()} 
          icon={ShieldCheck} 
          color="emerald" 
          trend="+8%"
        />
        <MetricCard label="Total Claims" value={metrics.claimsCount} icon={ClipboardCheck} color="blue" />
        <MetricCard label="BM Incentive" value={`₹${metrics.incentiveGenerated.toLocaleString()}`} icon={Banknote} color="amber" />
      </div>

      {/* 3. OPTIMIZED 3-COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT COLUMN: IDENTITIY & PERSONNEL (3/12) */}
        <div className="lg:col-span-3 space-y-5">
          <section className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Geographic Info</h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-secondary uppercase">Parent District</p>
                <div className="flex items-center gap-2 text-sm font-bold text-text-primary group cursor-pointer hover:text-primary transition-colors">
                   <MapPin className="h-3.5 w-3.5 text-primary" />
                   {block.districtName}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-secondary uppercase">Initialized On</p>
                <p className="text-sm font-bold text-text-primary flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {new Date(block.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="pt-2">
                <p className="text-[10px] font-bold text-text-secondary uppercase mb-2 text-center py-1 bg-slate-50 border border-slate-100 rounded">Operational Status</p>
                <p className="text-[11px] text-text-secondary leading-relaxed bg-slate-50/50 p-2 rounded-lg italic border border-slate-100">
                  {block.description || "Active field operational unit. Currently overseeing school enrollment drives and policy distribution."}
                </p>
              </div>
            </div>
          </section>

          <BlockUsersPreview 
            manager={block.manager} 
            othersCount={8} 
            onViewAll={() => {}} 
          />
        </div>

        {/* CENTER COLUMN: PERFORMANCE & FINANCE (6/12) */}
        <div className="lg:col-span-6 space-y-5">
          <BlockPerformanceCard 
            data={performanceTrend} 
            healthStatus={block.performance === 'high_performing' ? 'high' : 'stable'} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <BlockClaimsCard metrics={metrics} />
            <BlockIncentiveCard metrics={metrics} />
          </div>
        </div>

        {/* RIGHT COLUMN: ENTITIES & ACTIONS (3/12) */}
        <div className="lg:col-span-3 space-y-5">
          <BlockSchoolsPreview 
            schools={schoolsPreview} 
            totalCount={metrics.totalSchools} 
            onViewAll={() => {}} 
          />
          
          <BlockStudentsPreview 
            students={studentsPreview} 
            totalCount={metrics.totalStudents} 
            onViewAll={() => {}} 
          />

          {/* QUICK ADMINISTRATIVE ACTIONS */}
          <div className="bg-white rounded-2xl border border-border p-4 shadow-sm border-t-4 border-t-emerald-500">
            <h4 className="text-[10px] font-bold text-text-secondary uppercase mb-4 tracking-widest text-center">Unit Protocols</h4>
            <div className="space-y-2">
              <ActionButton 
                label="Process Incentives" 
                sub="Generate BM Slips" 
                icon={Banknote} 
                color="emerald" 
              />
              <ActionButton 
                label="Field Audit" 
                sub="Log Verification" 
                icon={ListTree} 
                color="blue" 
              />
              <ActionButton 
                label="Activity History" 
                sub="View All Logs" 
                icon={History} 
                color="slate" 
              />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

// UI COMPONENT: Metric Card (Reused but adapted for block context)
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

export default BlockDetailsPage;
