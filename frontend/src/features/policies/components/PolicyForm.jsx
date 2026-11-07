import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { policySchema } from '../schemas/policy.schema';
import Button from '../../../components/ui/Button';
import { Save, X, AlertTriangle } from 'lucide-react';
import BasicPolicyInfoSection from './PolicyFormSections/BasicPolicyInfoSection';
import PremiumConfigurationSection from './PolicyFormSections/PremiumConfigurationSection';
import CoverageRulesSection from './PolicyFormSections/CoverageRulesSection';
import ClaimRulesSection from './PolicyFormSections/ClaimRulesSection';
import EligibilitySection from './PolicyFormSections/EligibilitySection';
import ValiditySection from './PolicyFormSections/ValiditySection';
import StatusSection from './PolicyFormSections/StatusSection';

const PolicyForm = ({ initialData, onSubmit, onCancel, loading, isEdit = false }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty }
  } = useForm({
    resolver: zodResolver(policySchema),
    defaultValues: initialData || {
      status: 'draft',
      type: 'accidental_medical',
      hospitalBillOnly: true,
      maturityBenefit: false,
      accidentOnly: true,
      applicableClasses: [],
      premiumAmount: 500,
      claimThreshold: 5000,
    }
  });

  const hasEnrollments = initialData?.enrollmentsCount > 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto">
      {isEdit && hasEnrollments && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-900 uppercase tracking-tight">Warning: Active Enrollments</h4>
            <p className="text-xs text-amber-700 mt-1">
              This policy already has {initialData.enrollmentsCount} active enrollments. Changing premium or coverage rules may affect financial consistency. Proceed with caution.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-6 pb-24">
        <BasicPolicyInfoSection register={register} errors={errors} />
        <PremiumConfigurationSection register={register} errors={errors} />
        <CoverageRulesSection register={register} errors={errors} watch={watch} />
        <ClaimRulesSection register={register} errors={errors} />
        <EligibilitySection register={register} errors={errors} watch={watch} />
        <ValiditySection register={register} errors={errors} />
        <StatusSection register={register} errors={errors} />
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-lg z-30 lg:left-64 transition-all">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Button 
            variant="outline" 
            type="button" 
            onClick={onCancel}
            icon={<X className="h-4 w-4" />}
          >
            Cancel
          </Button>
          <div className="flex items-center space-x-3">
            {!isDirty && isEdit && (
              <span className="text-xs font-medium text-slate-400 mr-2">No changes detected</span>
            )}
            <Button 
              variant="primary" 
              type="submit" 
              loading={loading}
              disabled={isEdit && !isDirty}
              icon={<Save className="h-4 w-4" />}
            >
              {isEdit ? 'Update Configuration' : 'Save Policy'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PolicyForm;
