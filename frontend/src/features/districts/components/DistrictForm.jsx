import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { districtSchema, districtDefaultValues } from '../schemas/district.schema';
import BasicDistrictInfoSection from './DistrictFormSections/BasicDistrictInfoSection';
import ManagerAssignmentSection from './DistrictFormSections/ManagerAssignmentSection';
import OperationalSettingsSection from './DistrictFormSections/OperationalSettingsSection';
import Button from '../../../components/ui/Button';

const DistrictForm = ({ 
  initialData, 
  onSubmit, 
  onCancel, 
  isLoading = false,
  managerOptions = []
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(districtSchema),
    defaultValues: initialData || districtDefaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      {/* Section 1: Identity */}
      <section className="animate-in fade-in slide-in-from-top-4 duration-300">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-8 w-1 flex bg-primary rounded-full" />
          <h2 className="text-lg font-black text-text-primary uppercase tracking-tight">District Identity</h2>
        </div>
        <BasicDistrictInfoSection register={register} errors={errors} />
      </section>

      <hr className="border-border" />

      {/* Section 2: Management */}
      <section className="animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-8 w-1 flex bg-primary rounded-full" />
          <h2 className="text-lg font-black text-text-primary uppercase tracking-tight">Strategic Management</h2>
        </div>
        <ManagerAssignmentSection 
          register={register} 
          errors={errors} 
          watch={watch} 
          managerOptions={managerOptions} 
        />
      </section>

      <hr className="border-border" />

      {/* Section 3: Operations (Future Ready) */}
      <section className="animate-in fade-in slide-in-from-top-4 duration-700 delay-200 pb-8">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-8 w-1 flex bg-primary rounded-full" />
          <h2 className="text-lg font-black text-text-primary uppercase tracking-tight">Configuration</h2>
        </div>
        <OperationalSettingsSection register={register} />
      </section>

      {/* Form Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-border p-4 flex items-center justify-end gap-3 z-10 lg:left-64">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-end gap-3 px-4 md:px-10">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            isLoading={isLoading}
            disabled={!isDirty && !!initialData}
          >
            {initialData ? 'Update District' : 'Create District'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default DistrictForm;
