import React from 'react';
import { Search, RotateCcw, Filter } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { STUDENT_STATUS, POLICY_STATUS, STUDENT_CLASS } from '../constants/student.constants';
import { cn } from '../../../utils/cn';

const StudentFilters = ({ 
  filters, 
  onFilterChange, 
  onReset, 
  districtOptions = [], 
  blockOptions = [],
  schoolOptions = [],
  isBlocksLoading = false,
  isSchoolsLoading = false
}) => {
  
  const classOptions = [
    { value: '', label: 'All Classes' },
    ...STUDENT_CLASS.map(c => ({ value: c, label: `Class ${c}` }))
  ];

  const statusOptions = [
    { value: '', label: 'All Status' },
    ...Object.entries(STUDENT_STATUS).map(([key, value]) => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1).replace('_', ' ') }))
  ];

  const policyOptions = [
    { value: '', label: 'All Policy Status' },
    ...Object.entries(POLICY_STATUS).map(([key, value]) => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1).replace('_', ' ') }))
  ];

  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    const newFilters = { ...filters, [name]: value };
    
    // Dependency reset logic
    if (name === 'districtId') {
      newFilters.blockId = '';
      newFilters.schoolId = '';
    } else if (name === 'blockId') {
      newFilters.schoolId = '';
    }
    
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-border shadow-sm mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Main Search - Spans 3/12 */}
        <div className="lg:col-span-3">
          <Input
            placeholder="Search by Name, ID or Mobile..."
            value={filters.search || ''}
            onChange={handleSearchChange}
            icon={Search}
            className="w-full h-10"
          />
        </div>

        {/* Filters Grid - Spans 8/12 */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            <Select
              label="District"
              value={filters.districtId || ''}
              onChange={(e) => handleSelectChange('districtId', e.target.value)}
              options={[{ value: '', label: 'Districts' }, ...districtOptions]}
              className="w-full"
            />
            <Select
              label="Block"
              value={filters.blockId || ''}
              onChange={(e) => handleSelectChange('blockId', e.target.value)}
              options={[{ value: '', label: filters.districtId ? 'Blocks' : '-' }, ...blockOptions]}
              disabled={!filters.districtId || isBlocksLoading}
              className="w-full"
            />
            <Select
              label="School"
              value={filters.schoolId || ''}
              onChange={(e) => handleSelectChange('schoolId', e.target.value)}
              options={[{ value: '', label: filters.blockId ? 'Schools' : '-' }, ...schoolOptions]}
              disabled={!filters.blockId || isSchoolsLoading}
              className="w-full"
            />
            <Select
              label="Class"
              value={filters.class || ''}
              onChange={(val) => handleSelectChange('class', val)}
              options={classOptions}
              className="w-full"
            />
            <Select
              label="Registry Status"
              value={filters.status || ''}
              onChange={(val) => handleSelectChange('status', val)}
              options={statusOptions}
              className="w-full"
            />
            <Select
              label="Policy Link"
              value={filters.policyStatus || ''}
              onChange={(val) => handleSelectChange('policyStatus', val)}
              options={policyOptions}
              className="w-full"
            />
          </div>
        </div>

        {/* Reset Action - Spans 1/12 */}
        <div className="lg:col-span-1 flex items-end">
          <Button
            variant="ghost"
            size="md"
            onClick={onReset}
            className="text-text-secondary w-full h-10 flex items-center justify-center p-0"
            title="Reset All Filters"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Secondary Quick Filters */}
      <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-4">
        <span className="text-[10px] font-black text-text-secondary uppercase tracking-[0.1em] flex items-center gap-1.5">
          <Filter className="h-3 w-3" />
          Refine Results:
        </span>
        <div className="flex flex-wrap gap-2">
           <FilterPill 
             label="Has Claims" 
             active={filters.hasClaim === 'true'} 
             onClick={() => handleSelectChange('hasClaim', filters.hasClaim === 'true' ? '' : 'true')} 
           />
           <FilterPill 
             label="No Coverage" 
             active={filters.policyStatus === 'not_enrolled'} 
             onClick={() => handleSelectChange('policyStatus', filters.policyStatus === 'not_enrolled' ? '' : 'not_enrolled')} 
           />
           <FilterPill 
             label="Audit Required" 
             active={filters.status === 'needs_review'} 
             onClick={() => handleSelectChange('status', filters.status === 'needs_review' ? '' : 'needs_review')} 
           />
        </div>
      </div>
    </div>
  );
};

// Internal Utility Component
const FilterPill = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={cn(
      "px-3 py-1 rounded-full text-[10px] font-bold border transition-all uppercase tracking-tighter",
      active 
        ? "bg-primary text-white border-primary shadow-sm" 
        : "bg-white text-text-secondary border-border hover:bg-slate-50"
    )}
  >
    {label}
  </button>
);

export default StudentFilters;
