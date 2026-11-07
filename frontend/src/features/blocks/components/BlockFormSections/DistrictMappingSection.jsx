import React from 'react';
import Select from '../../../../components/ui/Select';
import { MapPin, Info } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const DistrictMappingSection = ({ register, errors, watch, districtOptions = [] }) => {
  const selectedDistrictId = watch('districtId');
  const selectedDistrict = districtOptions.find(d => d.value === selectedDistrictId);

  return (
    <div className="space-y-4">
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h3 className="text-sm font-bold text-text-primary">Administrative Mapping</h3>
        <p className="text-xs text-text-secondary">Every block must belong to a primary district for reporting and incentive routing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <Select
          label="Parent District"
          {...register('districtId')}
          options={districtOptions}
          error={errors.districtId?.message}
          placeholder="Select District"
          required
        />

        {selectedDistrict ? (
          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-4 animate-in fade-in slide-in-from-left-2">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary">{selectedDistrict.label}</h4>
              <p className="text-xs text-text-secondary mt-0.5 uppercase font-bold tracking-tighter">Selected Parent Geography</p>
              <div className="mt-2 text-[10px] text-primary/60 font-bold uppercase tracking-tight flex items-center gap-1">
                <Info className="h-3 w-3" />
                Linked block data will roll up to this district.
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl border border-dashed border-slate-200 flex items-start gap-4 opacity-60">
            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-secondary italic">No District Selected</h4>
              <p className="text-xs text-text-secondary mt-0.5">Please map this block to a district to enable operations.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DistrictMappingSection;
