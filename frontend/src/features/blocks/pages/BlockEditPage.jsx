import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Loader2 } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import BlockForm from '../components/BlockForm';
import Button from '../../../components/ui/Button';
import { useBlockDetails, useUpdateBlock } from '../hooks/useBlockDetails';
import { useBlockManagerOptions } from '../hooks/useBlocksList';
import { useDistrictsList } from '../../districts/hooks/useDistrictsList';
import { toast } from 'sonner';

const BlockEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data: blockData, isLoading: isBlockLoading, error } = useBlockDetails(id);
  const { data: managerOptionsData, isLoading: isManagersLoading } = useBlockManagerOptions();
  const { data: districtsData, isLoading: isDistrictsLoading } = useDistrictsList();
  const updateMutation = useUpdateBlock();

  const districtOptions = useMemo(() => {
    return (districtsData?.data || []).map(d => ({
      value: d.id,
      label: d.name
    }));
  }, [districtsData]);

  const handleSubmit = (payload) => {
    updateMutation.mutate({ id, payload }, {
      onSuccess: () => {
        toast.success('Block operational data updated');
        navigate(`/admin/blocks/${id}`);
      },
      onError: (err) => {
        toast.error(err.message || 'Failed to update block');
      }
    });
  };

  if (isBlockLoading) {
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
          <p className="text-text-secondary mt-2">The execution unit you are trying to edit doesn't exist.</p>
          <Button className="mt-6" onClick={() => navigate('/admin/blocks')}>
            Back to Inventory
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="bg-slate-50/50 min-h-screen">
      <div className="mb-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate(`/admin/blocks/${id}`)}
          className="text-text-secondary -ml-2 hover:bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Dashboard
        </Button>
      </div>

      <PageHeader 
        title={`Edit Block: ${blockData.data.name}`} 
        subtitle="Update school mappings, manager assignments, or operational status for this unit."
      />

      <div className="max-w-5xl mx-auto pb-24">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 lg:p-10">
          <BlockForm 
            initialData={blockData.data} 
            onSubmit={handleSubmit} 
            onCancel={() => navigate(`/admin/blocks/${id}`)}
            isLoading={updateMutation.isPending || isManagersLoading || isDistrictsLoading}
            managerOptions={managerOptionsData?.data || []}
            districtOptions={districtOptions}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default BlockEditPage;
