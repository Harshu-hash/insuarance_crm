import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Loader2 } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import RoleForm from '../components/RoleForm';
import Button from '../../../components/ui/Button';
import { useRoleDetails, useUpdateRole } from '../hooks/useRoleDetails';
import { toast } from 'sonner';

const RoleEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useRoleDetails(id);
  const updateMutation = useUpdateRole();

  const handleSubmit = (payload) => {
    updateMutation.mutate({ id, payload }, {
      onSuccess: () => {
        // sonner.success('Role updated successfully');
        navigate(`/admin/roles/${id}`);
      },
      onError: (err) => {
        // sonner.error(err.message || 'Failed to update role');
      }
    });
  };

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !data?.data) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h2 className="text-xl font-bold text-text-primary">Role not found</h2>
          <p className="text-text-secondary mt-2">The role you are trying to edit doesn't exist or has been removed.</p>
          <Button className="mt-6" onClick={() => navigate('/admin/roles')}>
            Back to Roles
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="mb-4">
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
        title={`Edit Role: ${data.data.name}`} 
        subtitle="Modify permissions and access levels for this role."
      />

      <div className="max-w-5xl mx-auto pb-20">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 lg:p-10">
          <RoleForm 
            initialData={data.data} 
            onSubmit={handleSubmit} 
            onCancel={() => navigate(`/admin/roles/${id}`)}
            isLoading={updateMutation.isPending}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default RoleEditPage;
