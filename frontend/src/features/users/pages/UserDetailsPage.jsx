import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Edit, Mail, Shield, User as UserIcon, Settings
} from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import Button from '../../../components/ui/Button';
import { useUserDetails } from '../hooks/useUsers';
import { ROLE_LABELS } from '../constants/user.constants';
import UserSummaryCard from '../components/UserSummaryCard';
import UserActivityCard from '../components/UserActivityCard';
import UserNotesCard from '../components/UserNotesCard';
import UserAssignmentPanel from '../components/UserAssignmentPanel';
import { useUserMutation } from '../hooks/useUsers';

const UserDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, isLoading } = useUserDetails(id);
  const { updateUser } = useUserMutation();

  if (isLoading) return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-8 w-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
  );

  if (!user) return (
    <PageContainer>
      <div className="text-center py-20">
        <h2 className="text-xl font-bold">User Not Found</h2>
        <Button onClick={() => navigate('/admin/users')} className="mt-4">Back to Users</Button>
      </div>
    </PageContainer>
  );

  const handleTerritoryUpdate = (updates) => {
    updateUser.mutate({ id, updates });
  };

  return (
    <PageContainer>
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <button 
            onClick={() => navigate('/admin/users')}
            className="flex items-center text-xs font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest mb-3"
          >
            <ArrowLeft size={14} className="mr-2" />
            Back to User Management
          </button>
          <h1 className="text-2xl font-black text-text-primary tracking-tight">
            User Profile <span className="text-primary">Details</span>
          </h1>
          <p className="text-xs text-text-secondary font-medium mt-1">Reviewing and managing account for {user.fullName}</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" size="sm" className="border-slate-200 bg-white shadow-sm hover:border-primary/30 transition-all">
             <Shield size={16} className="mr-2 text-primary" /> Permissions
           </Button>
           <Button variant="primary" size="sm" onClick={() => navigate(`/admin/users/${id}/edit`)} className="shadow-lg shadow-primary/20">
             <Edit size={16} className="mr-2" /> Edit User Profile
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Details Column */}
        <div className="lg:col-span-1 space-y-6">
          <UserSummaryCard user={user} />

          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-4 flex items-center">
              <Settings size={14} className="mr-2 text-primary" />
              Quick Controls
            </h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-xs h-10 border-slate-200">Reset Password</Button>
              <Button variant="outline" className="w-full justify-start text-xs h-10 border-slate-200 text-danger hover:bg-danger/5">Deactivate Account</Button>
            </div>
          </div>
        </div>

        {/* Assignments & Activity Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Information Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoBlock 
              icon={UserIcon} 
              title="Personal Information" 
              items={[
                { label: 'Full Name', value: user.fullName },
                { label: 'Email Address', value: user.email },
                { label: 'Mobile Number', value: '+91 ' + user.mobile },
                { label: 'User Code', value: user.userCode || '---' },
              ]} 
            />
            <InfoBlock 
              icon={Shield} 
              title="System Access" 
              items={[
                { label: 'Functional Role', value: ROLE_LABELS[user.role] },
                { label: 'Designation', value: user.role === 'SUPER_ADMIN' ? 'Full Control' : 'Manager' },
                { label: '2FA Status', value: 'Disabled' },
                { label: 'Account Created', value: new Date(user.createdAt).toLocaleDateString() },
              ]} 
            />
          </div>

          {/* Territory Management */}
          <UserAssignmentPanel 
            district={user.district} 
            block={user.block} 
            onUpdate={handleTerritoryUpdate} 
          />

          {/* Activity Logs */}
          <UserActivityCard user={user} />

          {/* Notes */}
          <UserNotesCard notes={user.notes} />
        </div>
      </div>
    </PageContainer>
  );
};

const InfoBlock = ({ icon: Icon, title, items }) => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
    <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-6 flex items-center">
      <Icon size={14} className="mr-2 text-primary" />
      {title}
    </h3>
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-1">{item.label}</span>
          <span className="text-sm font-bold text-text-primary truncate">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default UserDetailsPage;
