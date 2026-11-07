import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, UserPlus, FileDown, Search, ArrowUpRight, ArrowDownRight, Clock
} from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import UserTable from '../components/UserTable';
import UserFilters from '../components/UserFilters';
import UserEmptyState from '../components/UserEmptyState';
import { useUsersList } from '../hooks/useUsers';

const UsersListPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    search: '',
    role: '',
    status: '',
    approvalStatus: ''
  });

  const { data, isLoading } = useUsersList(filters);
  const users = data?.data || [];

  const handleClearFilters = () => {
    setFilters({ search: '', role: '', status: '', approvalStatus: '' });
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Account Management" 
        subtitle="Manage platform administrators, managers, and operational staff."
      >
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex border-slate-200 shadow-sm">
            <FileDown size={16} className="mr-2 text-slate-400" /> Export List
          </Button>
          <Button variant="primary" size="sm" onClick={() => navigate('/admin/users/create')} className="shadow-lg shadow-primary/20">
            <UserPlus size={16} className="mr-2" /> Add New User
          </Button>
        </div>
      </PageHeader>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard 
          label="Total Staff" 
          value={users.length} 
          trend="+12%" 
          trendUp={true} 
          icon={Users} 
          color="bg-primary/10 text-primary" 
        />
        <SummaryCard 
          label="Pending Approval" 
          value={users.filter(u => u.approvalStatus === 'PENDING').length} 
          trend="-2" 
          trendUp={false} 
          icon={Clock} 
          color="bg-amber-100/50 text-amber-600" 
        />
        <SummaryCard 
          label="Active Accounts" 
          value={users.filter(u => u.status === 'ACTIVE').length} 
          trend="88%" 
          trendUp={true} 
          icon={Users} 
          color="bg-emerald-100/50 text-emerald-600" 
        />
        <SummaryCard 
          label="Account Lockouts" 
          value={0} 
          trend="Stable" 
          trendUp={true} 
          icon={Users} 
          color="bg-slate-100/50 text-slate-500" 
        />
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <UserFilters filters={filters} onFilterChange={setFilters} />
        
        {isLoading ? (
          <div className="p-20 flex flex-col items-center justify-center">
            <div className="h-10 w-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <p className="text-xs font-bold text-slate-400 mt-4 uppercase tracking-widest">Loading User Data...</p>
          </div>
        ) : users.length > 0 ? (
          <UserTable 
            users={users} 
            onEdit={(id) => navigate(`/admin/users/${id}/edit`)} 
            onView={(id) => navigate(`/admin/users/${id}`)}
          />
        ) : (
          <div className="p-6">
            <UserEmptyState 
              onClear={handleClearFilters} 
              onAdd={() => navigate('/admin/users/create')} 
            />
          </div>
        )}
      </div>
    </PageContainer>
  );
};

const SummaryCard = ({ label, value, trend, trendUp, icon: Icon, color }) => (
  <Card className="border-none shadow-sm shadow-slate-200/50 overflow-hidden">
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`h-10 w-10 rounded-2xl flex items-center justify-center shadow-sm ${color}`}>
          <Icon size={20} />
        </div>
        <div className={`flex items-center text-[10px] font-black px-2 py-0.5 rounded-full ${trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
          {trendUp ? <ArrowUpRight size={10} className="mr-0.5" /> : <ArrowDownRight size={10} className="mr-0.5" />}
          {trend}
        </div>
      </div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{label}</p>
      <h3 className="text-2xl font-black text-text-primary tabular-nums">{value}</h3>
    </div>
  </Card>
);

const Card = ({ children, className }) => (
  <div className={`bg-surface rounded-3xl border border-border ${className}`}>
    {children}
  </div>
);

export default UsersListPage;
