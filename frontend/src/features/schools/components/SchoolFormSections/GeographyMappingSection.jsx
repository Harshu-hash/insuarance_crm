import React, { useEffect } from 'react';
import Select from '../../../../components/ui/Select';
import { useBlocksList } from '../../../blocks/hooks/useBlocksList';
import { MapPin, Info } from 'lucide-react';

const GeographyMappingSection = ({ 
  register, 
  errors, 
  watch, 
  setValue, 
  districtOptions = [] 
}) => {
  const selectedDistrictId = watch('districtId');
  const selectedBlockId = watch('blockId');

  // Fetch blocks based on selected district
  const { data: blocksData, isLoading: isBlocksLoading } = useBlocksList({
    districtId: selectedDistrictId
  });

  const blockOptions = (blocksData?.data || []).map(b => ({
    value: b.id,
    label: b.name
  }));

  // Reset block if district changes
  useEffect(() => {
    if (selectedDistrictId && !blockOptions.find(b => b.value === selectedBlockId)) {
      // We only reset if the current blockId is not in the new list 
      // (this avoids resetting during initial edit-mode load)
      // Actually, a safer way for create mode:
    }
  }, [selectedDistrictId]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 bg-indigo-500 rounded-full" />
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Administrative Mapping</h3>
      </div>

      <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl flex items-start gap-3 mb-4">
        <Info className="h-5 w-5 text-indigo-500 mt-0.5" />
        <p className="text-xs text-indigo-700 leading-relaxed font-medium">
          Note: This institutional unit will be mapped strictly to the selected District and Block. 
          This affects reporting hierarchy and student eligibility.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1">
          <Select
            label="Parent District"
            {...register('districtId')}
            options={[{ value: '', label: 'Select District' }, ...districtOptions]}
            error={errors.districtId?.message}
            required
            icon={MapPin}
          />
        </div>
        
        <div className="space-y-1">
          <Select
            label="Block Execution Unit"
            {...register('blockId')}
            options={[{ value: '', label: selectedDistrictId ? 'Select Block' : 'Choose District First' }, ...blockOptions]}
            error={errors.blockId?.message}
            required
            disabled={!selectedDistrictId || isBlocksLoading}
            isLoading={isBlocksLoading}
          />
          {selectedDistrictId && !isBlocksLoading && blockOptions.length === 0 && (
            <p className="text-[10px] font-bold text-amber-600 uppercase mt-1">
              Warning: No blocks found for this district.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeographyMappingSection;
