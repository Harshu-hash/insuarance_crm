import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schoolSchema, schoolDefaultValues } from '../schemas/school.schema';
import BasicSchoolInfoSection from './SchoolFormSections/BasicSchoolInfoSection';
import GeographyMappingSection from './SchoolFormSections/GeographyMappingSection';
import ContactInfoSection from './SchoolFormSections/ContactInfoSection';
import OperationalSettingsSection from './SchoolFormSections/OperationalSettingsSection';
import Button from '../../../components/ui/Button';
import { Save, X } from 'lucide-react';

const SchoolForm = ({ 
  initialData, 
  onSubmit, 
  onCancel, 
  isLoading, 
  districtOptions = [] 
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty }
  } = useForm({
    resolver: zodResolver(schoolSchema),
    defaultValues: initialData || schoolDefaultValues
  });

  const onFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-12">
      <BasicSchoolInfoSection 
        register={register} 
        errors={errors} 
      />

      <div className="border-t border-border pt-10">
        <GeographyMappingSection 
          register={register} 
          errors={errors} 
          watch={watch} 
          setValue={setValue}
          districtOptions={districtOptions}
        />
      </div>

      <div className="border-t border-border pt-10">
        <ContactInfoSection 
          register={register} 
          errors={errors} 
        />
      </div>

      <div className="border-t border-border pt-10">
        <OperationalSettingsSection 
          register={register} 
          errors={errors} 
          watch={watch}
        />
      </div>

      {/* Form Actions */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-border">
        <Button
          type="button"
          variant="ghost"
          onClick={onCancel}
          disabled={isLoading}
          className="w-full sm:w-auto order-2 sm:order-1"
        >
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoading || (initialData && !isDirty)}
          className="w-full sm:w-auto order-1 sm:order-2 px-8 shadow-lg shadow-primary/20"
        >
          <Save className="h-4 w-4 mr-2" />
          {initialData ? 'Update Institutional Data' : 'Initialize School Unit'}
        </Button>
      </div>
    </form>
  );
};

export default SchoolForm;
