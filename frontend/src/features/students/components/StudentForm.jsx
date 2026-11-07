import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { studentSchema, studentDefaultValues } from '../schemas/student.schema';
import BasicStudentInfoSection from './StudentFormSections/BasicStudentInfoSection';
import GuardianInfoSection from './StudentFormSections/GuardianInfoSection';
import AcademicInfoSection from './StudentFormSections/AcademicInfoSection';
import GeographyMappingSection from './StudentFormSections/GeographyMappingSection';
import StatusSection from './StudentFormSections/StatusSection';
import Button from '../../../components/ui/Button';
import { Save, X } from 'lucide-react';

const StudentForm = ({ 
  initialData, 
  onSubmit, 
  onCancel, 
  isLoading 
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty }
  } = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: initialData || studentDefaultValues
  });

  const onFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-12">
      <BasicStudentInfoSection 
        register={register} 
        errors={errors} 
      />

      <div className="border-t border-border pt-10">
        <GuardianInfoSection 
          register={register} 
          errors={errors} 
        />
      </div>

      <div className="border-t border-border pt-10">
        <AcademicInfoSection 
          register={register} 
          errors={errors} 
        />
      </div>

      <div className="border-t border-border pt-10">
        <GeographyMappingSection 
          register={register} 
          errors={errors} 
          watch={watch} 
          setValue={setValue}
        />
      </div>

      <div className="border-t border-border pt-10">
        <StatusSection 
          register={register} 
          errors={errors} 
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
          {initialData ? 'Update Student Record' : 'Create Insured Identity'}
        </Button>
      </div>
    </form>
  );
};

export default StudentForm;
