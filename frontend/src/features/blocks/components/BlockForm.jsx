import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { blockSchema, blockDefaultValues } from '../schemas/block.schema';
import BasicBlockInfoSection from './BlockFormSections/BasicBlockInfoSection';
import DistrictMappingSection from './BlockFormSections/DistrictMappingSection';
import ManagerAssignmentSection from './BlockFormSections/ManagerAssignmentSection';
import Button from '../../../components/ui/Button';

const BlockForm = ({ 
  initialData, 
  onSubmit, 
  onCancel, 
  isLoading = false,
  managerOptions = [],
  districtOptions = []
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(blockSchema),
    defaultValues: initialData || blockDefaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      {/* Section 1: Block Identity */}
      <section className="animate-in fade-in slide-in-from-top-4 duration-300">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-8 w-1 flex bg-primary rounded-full" />
          <h2 className="text-lg font-black text-text-primary uppercase tracking-tight">Block Identity</h2>
        </div>
        <BasicBlockInfoSection register={register} errors={errors} />
      </section>

      <hr className="border-border" />

      {/* Section 2: Administrative Geography */}
      <section className="animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-8 w-1 flex bg-primary rounded-full" />
          <h2 className="text-lg font-black text-text-primary uppercase tracking-tight">District Mapping</h2>
        </div>
        <DistrictMappingSection 
          register={register} 
          errors={errors} 
          watch={watch} 
          districtOptions={districtOptions} 
        />
      </section>

      <hr className="border-border" />

      {/* Section 3: Field Management */}
      <section className="animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-8 w-1 flex bg-primary rounded-full" />
          <h2 className="text-lg font-black text-text-primary uppercase tracking-tight">Manager Assignment</h2>
        </div>
        <ManagerAssignmentSection 
          register={register} 
          errors={errors} 
          watch={watch} 
          managerOptions={managerOptions} 
        />
      </section>

      {/* Form Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-border p-4 flex items-center justify-end gap-3 z-10 lg:left-64 shadow-[0_-4px_10px_rgb(0,0,0,0.05)]">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-end gap-3 px-4 md:px-10">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={onCancel}
            disabled={isLoading}
            className="text-text-secondary"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            isLoading={isLoading}
            disabled={!isDirty && !!initialData}
            className="px-10"
          >
            {initialData ? 'Update Operational Block' : 'Initialize Block'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BlockForm;
