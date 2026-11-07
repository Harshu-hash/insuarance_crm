import React from 'react';
import Select from '../../../../components/ui/Select';
import { useDistrictsList } from '../../../districts/hooks/useDistrictsList';
import { useBlocksList } from '../../../blocks/hooks/useBlocksList';
import { useSchoolsList } from '../../../schools/hooks/useSchoolsList';
import { MapPin, Info } from 'lucide-react';

const GeographyMappingSection = ({ 
  register, 
  errors, 
  watch, 
  setValue 
}) => {
  const selectedDistrictId = watch('districtId');
  const selectedBlockId = watch('blockId');
  const selectedSchoolId = watch('schoolId');

  // Level 1: Districts
  const { data: districtsData, isLoading: isDistrictsLoading } = useDistrictsList();
  const districtOptions = (districtsData?.data || []).map(d => ({
    value: d.id,
    label: d.name
  }));

  // Level 2: Blocks (Dependent on District)
  const { data: blocksData, isLoading: isBlocksLoading } = useBlocksList({
    districtId: selectedDistrictId
  });
  const blockOptions = (blocksData?.data || []).map(b => ({
    value: b.id,
    label: b.name
  }));

  // Level 3: Schools (Dependent on Block)
  const { data: schoolsData, isLoading: isSchoolsLoading } = useSchoolsList({
    blockId: selectedBlockId
  });
  const schoolOptions = (schoolsData?.data || []).map(s => ({
    value: s.id,
    label: s.name
  }));

  const handleDistrictChange = (val) => {
    setValue('districtId', val);
    setValue('blockId', '');
    setValue('schoolId', '');
  };

  const handleBlockChange = (val) => {
    setValue('blockId', val);
    setValue('schoolId', '');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 bg-amber-500 rounded-full" />
        <h3 className="text-sm font-black text-text-primary uppercase tracking-wider">Institutional Mapping</h3>
      </div>

      <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-xl flex items-start gap-3 mb-4">
        <Info className="h-5 w-5 text-amber-500 mt-0.5" />
        <p className="text-[11px] text-amber-800 leading-relaxed font-bold uppercase tracking-tight">
          Hierarchy Enforcement: Every student must be mapped to a specific District, Block, and School unit. 
          This mapping determines which manager (DM/BM) oversees the student coverage.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Select
          label="District"
          {...register('districtId')}
          onChange={(e) => handleDistrictChange(e.target.value)}
          options={[{ value: '', label: 'Select District' }, ...districtOptions]}
          error={errors.districtId?.message}
          required
          icon={MapPin}
          isLoading={isDistrictsLoading}
        />
        
        <Select
          label="Block"
          {...register('blockId')}
          onChange={(e) => handleBlockChange(e.target.value)}
          options={[{ value: '', label: selectedDistrictId ? 'Select Block' : 'Choose District First' }, ...blockOptions]}
          error={errors.blockId?.message}
          required
          disabled={!selectedDistrictId || isBlocksLoading}
          isLoading={isBlocksLoading}
        />

        <Select
          label="Institution / School"
          {...register('schoolId')}
          options={[{ value: '', label: selectedBlockId ? 'Select School' : 'Choose Block First' }, ...schoolOptions]}
          error={errors.schoolId?.message}
          required
          disabled={!selectedBlockId || isSchoolsLoading}
          isLoading={isSchoolsLoading}
        />
      </div>
    </div>
  );
};

export default GeographyMappingSection;
