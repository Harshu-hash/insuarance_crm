import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Loader2 } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import DistrictForm from '../components/DistrictForm';
import Button from '../../../components/ui/Button';
import { useDistrictDetails, useUpdateDistrict } from '../hooks/useDistrictDetails';
import { useManagerOptions } from '../hooks/useDistrictsList';
import { toast } from 'sonner';

const DistrictEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data: districtData, isLoading: isDistrictLoading, error } = useDistrictDetails(id);
  const { data: managerOptionsData, isLoading: isManagersLoading } = useManagerOptions();
  const updateMutation = useUpdateDistrict();

  const handleSubmit = (payload) => {
    updateMutation.mutate({ id, payload }, {
      onSuccess: () => {
        toast.success('District updated successfully');
        navigate(`/admin/districts/${id}`);
      },
      onError: (err) => {
        toast.error(err.message || 'Failed to update district');
      }
    });
  };

  if (isDistrictLoading) {
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
          <p className="text-text-secondary mt-2">The district you are trying to edit doesn't exist.</p>
          <Button className="mt-6" onClick={() => navigate('/admin/districts')}>
            Back to Districts
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
          onClick={() => navigate('/admin/districts')}
          className="text-text-secondary -ml-2 hover:bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Districts
        </Button>
      </div>

      <PageHeader 
        title={`Edit District: ${districtData.data.name}`} 
        subtitle="Modify district details, reassign managers, or update operational status."
      />

      <div className="max-w-5xl mx-auto pb-24">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 lg:p-10">
          <DistrictForm 
            initialData={districtData.data} 
            onSubmit={handleSubmit} 
            onCancel={() => navigate(`/admin/districts/${id}`)}
            isLoading={updateMutation.isPending || isManagersLoading}
            managerOptions={managerOptionsData?.data || []}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default DistrictEditPage;
