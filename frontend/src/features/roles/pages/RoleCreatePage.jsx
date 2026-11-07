import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import RoleForm from '../components/RoleForm';
import Button from '../../../components/ui/Button';
import { useCreateRole } from '../hooks/useRoleDetails';
import { toast } from 'sonner';

const RoleCreatePage = () => {
  const navigate = useNavigate();
  const createMutation = useCreateRole();

  const handleSubmit = (data) => {
    createMutation.mutate(data, {
      onSuccess: (res) => {
        // sonner.success(`Role "${res.data.name}" created successfully`);
        navigate('/admin/roles');
      },
      onError: (err) => {
        // sonner.error(err.message || 'Failed to create role');
      }
    });
  };

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
        title="Create New Role" 
        subtitle="Define a custom role with specific permissions and data access scope."
      />

      <div className="max-w-5xl mx-auto pb-20">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 lg:p-10">
          <RoleForm 
            onSubmit={handleSubmit} 
            onCancel={() => navigate('/admin/roles')}
            isLoading={createMutation.isPending}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default RoleCreatePage;
