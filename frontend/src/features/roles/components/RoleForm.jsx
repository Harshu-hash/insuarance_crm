import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save, X, AlertCircle } from 'lucide-react';
import { roleSchema, roleDefaultValues } from '../schemas/role.schema';
import BasicRoleInfoSection from './RoleFormSections/BasicRoleInfoSection';
import PermissionAssignmentSection from './RoleFormSections/PermissionAssignmentSection';
import ScopeAccessSection from './RoleFormSections/ScopeAccessSection';
import StatusSection from './RoleFormSections/StatusSection';
import Button from '../../../components/ui/Button';

const RoleForm = ({ 
  initialData = roleDefaultValues, 
  onSubmit, 
  onCancel, 
  isLoading = false 
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(roleSchema),
    defaultValues: initialData,
  });

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  const isSystem = initialData.type === 'system';

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-8">
      {/* Form sections */}
      <div className="space-y-12">
        {/* Section 1: Basic Info */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-6 w-1 bg-primary rounded-full" />
            <h2 className="text-lg font-bold text-text-primary">Basic Role Information</h2>
          </div>
          <BasicRoleInfoSection
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        </section>

        <hr className="border-border" />

        {/* Section 2: Permissions */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-6 w-1 bg-primary rounded-full" />
            <h2 className="text-lg font-bold text-text-primary">Module-Level Permissions</h2>
          </div>
          <PermissionAssignmentSection
            watch={watch}
            setValue={setValue}
            errors={errors}
          />
        </section>

        <hr className="border-border" />

        {/* Section 3: Scope */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-6 w-1 bg-primary rounded-full" />
            <h2 className="text-lg font-bold text-text-primary">Data Access Boundaries</h2>
          </div>
          <ScopeAccessSection
            watch={watch}
            setValue={setValue}
          />
        </section>

        <hr className="border-border" />

        {/* Section 4: Status */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-6 w-1 bg-primary rounded-full" />
            <h2 className="text-lg font-bold text-text-primary">Visibility & Status</h2>
          </div>
          <StatusSection
            watch={watch}
            setValue={setValue}
          />
        </section>
      </div>

      {/* Warnings for System Roles */}
      {isSystem && (
        <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-amber-900">System Role Notice</h4>
            <p className="text-xs text-amber-700 mt-1 leading-relaxed">
              This is a predefined system role. You can modify its permissions and scope, but core attributes like the Role Key and Name may be restricted to maintain system stability.
            </p>
          </div>
        </div>
      )}

      {/* Form Actions (Sticky Footer) */}
      <div className="sticky bottom-0 left-0 right-0 py-4 bg-white/80 backdrop-blur-md border-t border-border flex items-center justify-end gap-3 z-20">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button
          type="submit"
          isLoading={isLoading}
          disabled={!isDirty}
        >
          <Save className="h-4 w-4 mr-2" />
          {initialData.id ? 'Save Changes' : 'Create Role'}
        </Button>
      </div>
    </form>
  );
};

export default RoleForm;
