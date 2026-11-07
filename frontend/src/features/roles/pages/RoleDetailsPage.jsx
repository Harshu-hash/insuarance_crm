import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Edit2, Copy, Trash2, History, Shield, Globe, Users, Loader2, CheckCircle2 } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import RoleStatusBadge from '../components/RoleStatusBadge';
import RoleTypeBadge from '../components/RoleTypeBadge';
import ScopeBadge from '../components/ScopeBadge';
import RoleUsersPreviewCard from '../components/RoleUsersPreviewCard';
import RoleNotesSection from '../components/RoleNotesSection';
import { useRoleDetails, useRoleUsersPreview } from '../hooks/useRoleDetails';
import { PERMISSION_CATALOG } from '../constants/permission.constants';
import { ROLE_SCOPE_DESCRIPTIONS } from '../constants/role.constants';

const RoleDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: roleData, isLoading: isRoleLoading, error } = useRoleDetails(id);
  const { data: usersData, isLoading: isUsersLoading } = useRoleUsersPreview(id);

  if (isRoleLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !roleData?.data) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h2 className="text-xl font-bold text-text-primary">Role not found</h2>
          <p className="text-text-secondary mt-2">The role details could not be retrieved.</p>
          <Button className="mt-6" onClick={() => navigate('/admin/roles')}>
            Back to Roles
          </Button>
        </div>
      </PageContainer>
    );
  }

  const role = roleData.data;
  const users = usersData?.data || [];
  const usersCount = role.assignedUsers || 0;
  const isSuperAdmin = role.permissions.includes('all');

  return (
    <PageContainer>
      <div className="mb-4 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/admin/roles')}
          className="text-text-secondary -ml-2 hover:bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Roles
        </Button>
      </div>

      <PageHeader 
        title={role.name} 
        subtitle={`System Key: ${role.key}`}
        actions={(
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Clone
            </Button>
            <Button size="sm" onClick={() => navigate(`/admin/roles/${id}/edit`)}>
              <Edit2 className="h-4 w-4 mr-2" />
              Edit Role
            </Button>
          </div>
        )}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        {/* Left Column: Role Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview Card */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <RoleStatusBadge status={role.status} />
              <RoleTypeBadge type={role.type} />
              <ScopeBadge scope={role.scope} />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Description</h4>
                <p className="text-sm text-text-primary leading-relaxed">
                  {role.description || "No description provided for this role."}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Created Date</h4>
                  <p className="text-sm font-medium text-text-primary">{new Date(role.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Last Updated</h4>
                  <p className="text-sm font-medium text-text-primary">{new Date(role.updatedAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scope Access Card */}
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-bold text-text-primary">Data Access Strategy</h3>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-primary/20 bg-primary/5">
                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">{role.scope.charAt(0).toUpperCase() + role.scope.slice(1)} Scope</h4>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    {ROLE_SCOPE_DESCRIPTIONS[role.scope]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Permissions Grouped by Module */}
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-bold text-text-primary">Assigned Permissions</h3>
            </div>
            <div className="p-6">
              {isSuperAdmin ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-700">Full System Access</h4>
                  <p className="text-sm text-emerald-600 mt-1 max-w-sm">
                    This role has the 'all' permission, bypasses all granular checks, and is granted access to every module and action.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {PERMISSION_CATALOG.map(module => {
                    const modulePerms = module.actions.filter(action => 
                      role.permissions.includes(`${module.module}.${action}`)
                    );
                    
                    if (modulePerms.length === 0) return null;

                    return (
                      <div key={module.module} className="p-4 rounded-xl border border-slate-100 bg-slate-50/30">
                        <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2 flex items-center justify-between">
                          {module.label}
                          <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded-full lowercase">
                            {modulePerms.length} / {module.actions.length}
                          </span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {modulePerms.map(action => (
                            <span 
                              key={action}
                              className="px-2 py-0.5 bg-white border border-slate-200 text-[10px] font-bold text-primary rounded-md uppercase"
                            >
                              {action}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar info */}
        <div className="space-y-8">
          <RoleUsersPreviewCard 
            count={usersCount} 
            users={users} 
            onViewAll={() => {}} // Placeholder
          />
          <RoleNotesSection notes="Internal system role. Critical for core operations. Changes should be audited." />
          
          {/* Audit Log Placeholder */}
          <div className="bg-white rounded-xl border border-border shadow-sm p-4 text-center">
            <History className="h-5 w-5 text-slate-300 mx-auto mb-2" />
            <h4 className="text-xs font-bold text-text-primary">Recent Activity</h4>
            <p className="text-[10px] text-text-secondary mt-1 italic">Audit history coming in Phase 8</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default RoleDetailsPage;
