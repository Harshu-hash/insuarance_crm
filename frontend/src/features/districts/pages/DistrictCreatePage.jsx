import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import DistrictForm from '../components/DistrictForm';
import Button from '../../../components/ui/Button';
import { useCreateDistrict } from '../hooks/useDistrictDetails';
import { useManagerOptions } from '../hooks/useDistrictsList';
import { toast } from 'sonner';

const DistrictCreatePage = () => {
  const navigate = useNavigate();
  const createMutation = useCreateDistrict();
  const { data: managerOptionsData, isLoading: isManagersLoading } = useManagerOptions();

  const handleSubmit = (data) => {
    createMutation.mutate(data, {
      onSuccess: (res) => {
        toast.success(`District "${res.data.name}" created successfully`);
        navigate('/admin/districts');
      },
      onError: (err) => {
        toast.error(err.message || 'Failed to create district');
      }
    });
  };

  return (
    <PageContainer>
      <div className="mb-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/admin/districts')}
          className="text-text-secondary -ml-2 hover:bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Districts
        </Button>
      </div>

      <PageHeader 
        title="Create New District" 
        subtitle="Define a new operational geographical unit and assign a managing administrator."
      />

      <div className="max-w-5xl mx-auto pb-24">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 lg:p-10">
          <DistrictForm 
            onSubmit={handleSubmit} 
            onCancel={() => navigate('/admin/districts')}
            isLoading={createMutation.isPending || isManagersLoading}
            managerOptions={managerOptionsData?.data || []}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default DistrictCreatePage;
