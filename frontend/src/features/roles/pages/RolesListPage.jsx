import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Users, ShieldCheck, ShieldAlert, Award, SlidersHorizontal, Download, RefreshCw } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import RoleSummaryCard from '../components/RoleSummaryCard';
import RoleFilters from '../components/RoleFilters';
import RoleTable from '../components/RoleTable';
import Button from '../../../components/ui/Button';
import { useRolesList, useToggleRoleStatus, useCloneRole } from '../hooks/useRolesList';
import { toast } from 'sonner';

const RolesListPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    type: '',
    scope: '',
  });

  const { data, isLoading, isFetching, refetch } = useRolesList(filters);
  const toggleStatusMutation = useToggleRoleStatus();
  const cloneMutation = useCloneRole();

  const roles = data?.data || [];
  
  // Calculate summary stats
  const stats = useMemo(() => {
    return {
      total: roles.length,
      active: roles.filter(r => r.status === 'active').length,
      inactive: roles.filter(r => r.status === 'inactive').length,
      system: roles.filter(r => r.type === 'system').length,
      custom: roles.filter(r => r.type === 'custom').length,
      fullAccess: roles.filter(r => r.permissions.includes('all')).length,
    };
  }, [roles]);

  const handleResetFilters = () => {
    setFilters({
      search: '',
      status: '',
      type: '',
      scope: '',
    });
  };

  const handleToggleStatus = (id) => {
    toggleStatusMutation.mutate(id, {
      onSuccess: () => {
        // sonner.success('Role status updated successfully');
      }
    });
  };

  const handleCloneRole = (id) => {
    cloneMutation.mutate(id, {
      onSuccess: (res) => {
        // sonner.success(`Role "${res.data.name}" created from clone`);
        navigate(`/admin/roles/${res.data.id}/edit`);
      }
    });
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Roles & Permissions" 
        subtitle="Manage user roles, granular permissions, and data access boundaries across the platform."
        actions={(
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => refetch()} isLoading={isFetching}>
              <RefreshCw className={cn("h-4 w-4 mr-2", isFetching && "animate-spin")} />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" onClick={() => navigate('/admin/roles/create')}>
              <Plus className="h-4 w-4 mr-2" />
              Create Role
            </Button>
          </div>
        )}
      />

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <RoleSummaryCard
          label="Total Roles"
          value={stats.total}
          icon={Users}
          color="primary"
        />
        <RoleSummaryCard
          label="Active Roles"
          value={stats.active}
          icon={ShieldCheck}
          color="success"
        />
        <RoleSummaryCard
          label="Full Access"
          value={stats.fullAccess}
          icon={Award}
          color="info"
        />
        <RoleSummaryCard
          label="System Defined"
          value={stats.system}
          icon={SlidersHorizontal}
          color="slate"
        />
      </div>

      {/* Filters */}
      <RoleFilters 
        filters={filters} 
        onFilterChange={setFilters} 
        onReset={handleResetFilters} 
      />

      {/* Main Table */}
      <RoleTable
        roles={roles}
        isLoading={isLoading}
        onView={(id) => navigate(`/admin/roles/${id}`)}
        onEdit={(id) => navigate(`/admin/roles/${id}/edit`)}
        onClone={handleCloneRole}
        onToggleStatus={handleToggleStatus}
      />
    </PageContainer>
  );
};

// Internal utility for consistency
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default RolesListPage;
