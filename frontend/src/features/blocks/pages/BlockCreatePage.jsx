import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import BlockForm from '../components/BlockForm';
import Button from '../../../components/ui/Button';
import { useCreateBlock } from '../hooks/useBlockDetails';
import { useBlockManagerOptions } from '../hooks/useBlocksList';
import { useDistrictsList } from '../../districts/hooks/useDistrictsList';
import { toast } from 'sonner';

const BlockCreatePage = () => {
  const navigate = useNavigate();
  const createMutation = useCreateBlock();
  const { data: managerOptionsData, isLoading: isManagersLoading } = useBlockManagerOptions();
  const { data: districtsData, isLoading: isDistrictsLoading } = useDistrictsList();

  const districtOptions = useMemo(() => {
    return (districtsData?.data || []).map(d => ({
      value: d.id,
      label: d.name
    }));
  }, [districtsData]);

  const handleSubmit = (data) => {
    createMutation.mutate(data, {
      onSuccess: (res) => {
        toast.success(`Block "${res.data.name}" initialized successfully`);
        navigate('/admin/blocks');
      },
      onError: (err) => {
        toast.error(err.message || 'Failed to initialize block');
      }
    });
  };

  return (
    <PageContainer className="bg-slate-50/50 min-h-screen">
      <div className="mb-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/admin/blocks')}
          className="text-text-secondary -ml-2 hover:bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Inventory
        </Button>
      </div>

      <PageHeader 
        title="Initialize New Block" 
        subtitle="Define a sub-district execution unit and map it to a parent district for operational activation."
      />

      <div className="max-w-5xl mx-auto pb-24">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 lg:p-10">
          <BlockForm 
            onSubmit={handleSubmit} 
            onCancel={() => navigate('/admin/blocks')}
            isLoading={createMutation.isPending || isManagersLoading || isDistrictsLoading}
            managerOptions={managerOptionsData?.data || []}
            districtOptions={districtOptions}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default BlockCreatePage;
