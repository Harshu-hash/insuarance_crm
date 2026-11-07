import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import SchoolForm from '../components/SchoolForm';
import Button from '../../../components/ui/Button';
import { useCreateSchool } from '../hooks/useSchoolsList';
import { useDistrictsList } from '../../districts/hooks/useDistrictsList';
import { toast } from 'sonner';

const SchoolCreatePage = () => {
  const navigate = useNavigate();
  const createMutation = useCreateSchool();
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
        toast.success(`School "${res.data.name}" registered successfully`);
        navigate('/admin/schools');
      },
      onError: (err) => {
        toast.error(err.message || 'Failed to initialize school unit');
      }
    });
  };

  return (
    <PageContainer className="bg-slate-50/50 min-h-screen">
      <div className="mb-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/admin/schools')}
          className="text-text-secondary -ml-2 hover:bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Inventory
        </Button>
      </div>

      <PageHeader 
        title="Initialize School Unit" 
        subtitle="Set up a new institutional unit for student enrollment. Map it to a district/block execution layer and define school contacts."
      />

      <div className="max-w-5xl mx-auto pb-24 px-4">
        <div className="bg-white rounded-3xl border border-border shadow-sm p-6 lg:p-12">
          <SchoolForm 
            onSubmit={handleSubmit} 
            onCancel={() => navigate('/admin/schools')}
            isLoading={createMutation.isPending || isDistrictsLoading}
            districtOptions={districtOptions}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default SchoolCreatePage;
