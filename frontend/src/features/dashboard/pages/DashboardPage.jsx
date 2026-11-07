import React from 'react';
import { 
  Users, 
  UserCheck, 
  Clock, 
  ClipboardCheck, 
  CheckCircle, 
  XCircle, 
  Banknote, 
  Wallet,
  Coins,
  MapPin,
  School,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';

import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import { useDashboardData } from '../hooks/useDashboardData';
import KpiCard from '../components/KpiCard';
import ChartCard from '../components/ChartCard';
import DashboardFilterBar from '../components/DashboardFilterBar';
import AlertWidget from '../components/AlertWidget';
import ActivityTableCard from '../components/ActivityTableCard';
import PerformanceTable from '../components/PerformanceTable';

const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const DashboardPage = () => {
  const { summary, charts, alerts, activities, isLoading, isError } = useDashboardData();

  if (isError) return (
    <div className="h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h2 className="text-xl font-bold text-text-primary">Failed to load dashboard</h2>
        <p className="text-text-secondary mt-2">Please check your connection or try again later.</p>
      </div>
    </div>
  );

  return (
    <PageContainer>
      <PageHeader 
        title="Super Admin Dashboard" 
        subtitle="Complete operational overview of the insurance platform"
      />

      <DashboardFilterBar 
        onRefresh={() => window.location.reload()} 
      />

      {/* KPI Section 1: Core Enrollment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard title="Total Students" value={summary?.studentsTotal} icon="Users" trend="up" trendValue="12" isLoading={isLoading} />
        <KpiCard title="Active Policies" value={summary?.activePolicies} icon="ShieldCheck" trend="up" trendValue="5" isLoading={isLoading} color="success" />
        <KpiCard title="Pending Enrollments" value={summary?.pendingEnrollments} icon="Clock" trend="down" trendValue="2" isLoading={isLoading} color="warning" />
        <KpiCard title="Premium Collected" value={summary?.premiumCollected} icon="Banknote" isLoading={isLoading} color="info" />
      </div>

      {/* KPI Section 2: Claims & Finance */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard title="Claims Submitted" value={summary?.claimsSubmitted} icon="ClipboardCheck" isLoading={isLoading} />
        <KpiCard title="Approved" value={summary?.claimsApproved} icon="CheckCircle" isLoading={isLoading} color="success" />
        <KpiCard title="Rejected" value={summary?.claimsRejected} icon="XCircle" isLoading={isLoading} color="danger" />
        <KpiCard title="Payout Pending" value={summary?.pendingPayoutAmount} icon="Wallet" isLoading={isLoading} color="warning" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartCard title="Student Enrollment Trend" subtitle="New registrations per month" isLoading={isLoading}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={charts?.enrollmentTrend}>
              <defs>
                <linearGradient id="colorEnroll" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
              <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorEnroll)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Claims Distribution" subtitle="Operational load by claim status" isLoading={isLoading}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={charts?.claimsDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {charts?.claimsDistribution?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Performance & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <PerformanceTable districts={charts?.districtComparison} isLoading={isLoading} />
        </div>
        <div>
          <AlertWidget alerts={alerts} isLoading={isLoading} />
        </div>
      </div>

      {/* Activities Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ActivityTableCard 
          title="Recent Enrollments"
          isLoading={isLoading}
          data={activities?.recentEnrollments || []}
          columns={[
            { key: 'id', label: 'ID' },
            { key: 'name', label: 'Student' },
            { key: 'district', label: 'District' },
            { key: 'amount', label: 'Premium', render: (val) => `₹${val}` },
          ]}
        />
        <ActivityTableCard 
          title="Latest Claims"
          isLoading={isLoading}
          data={activities?.recentClaims || []}
          columns={[
            { key: 'id', label: 'Claim ID' },
            { key: 'name', label: 'Student' },
            { key: 'amount', label: 'Amount', render: (val) => `₹${val.toLocaleString()}` },
            { key: 'status', label: 'Status' },
          ]}
        />
      </div>

      {/* Incentive Overview (Phase 4 Special) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center">
          <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center mr-4">
            <Coins className="text-indigo-600" size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">BM Incentive Payable</p>
            <p className="text-lg font-black text-text-primary">₹{summary?.bmIncentivePayable?.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center">
          <div className="h-10 w-10 bg-violet-50 rounded-xl flex items-center justify-center mr-4">
            <Coins className="text-violet-600" size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">DM Incentive Payable</p>
            <p className="text-lg font-black text-text-primary">₹{summary?.dmIncentivePayable?.toLocaleString()}</p>
          </div>
        </div>

        <div className="p-4 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20 flex items-center group cursor-pointer hover:bg-primary-dark transition-all">
          <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center mr-4">
            <ArrowUpRight size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Quick Action</p>
            <p className="text-sm font-bold">Process Pending Payouts</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DashboardPage;
