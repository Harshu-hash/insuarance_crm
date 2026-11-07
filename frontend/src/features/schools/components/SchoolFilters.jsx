import React from 'react';
import { Search, RotateCcw } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { SCHOOL_STATUS, SCHOOL_TYPE_LABELS, SCHOOL_PERFORMANCE_LABELS } from '../constants/school.constants';

const SchoolFilters = ({ 
  filters, 
  onFilterChange, 
  onReset, 
  districtOptions = [], 
  blockOptions = [],
  isBlocksLoading = false 
}) => {
  
  const statusOptions = [
    { value: '', label: 'All Status' },
    ...Object.entries(SCHOOL_STATUS).map(([key, value]) => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) }))
  ];

  const typeOptions = [
    { value: '', label: 'All Types' },
    ...Object.entries(SCHOOL_TYPE_LABELS).map(([value, label]) => ({ value, label }))
  ];

  const activityOptions = [
    { value: '', label: 'All Activity' },
    ...Object.entries(SCHOOL_PERFORMANCE_LABELS).map(([value, label]) => ({ value, label }))
  ];

  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    const newFilters = { ...filters, [name]: value };
    // If district changes, reset block
    if (name === 'districtId') {
      newFilters.blockId = '';
    }
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-border shadow-sm mb-6">
      <div className="flex flex-col lg:flex-row lg:items-end gap-4">
        {/* Search */}
        <div className="flex-[1.2] min-w-[200px]">
          <Input
            placeholder="Search school name or code..."
            value={filters.search || ''}
            onChange={handleSearchChange}
            icon={Search}
          />
        </div>

        {/* Filters Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 flex-[3.8]">
          <Select
            label="District"
            value={filters.districtId || ''}
            onChange={(val) => handleSelectChange('districtId', val)}
            options={[{ value: '', label: 'All Districts' }, ...districtOptions]}
            className="w-full"
          />
          <Select
            label="Block"
            value={filters.blockId || ''}
            onChange={(val) => handleSelectChange('blockId', val)}
            options={[{ value: '', label: filters.districtId ? 'All Blocks' : 'Select District First' }, ...blockOptions]}
            disabled={!filters.districtId || isBlocksLoading}
            className="w-full"
          />
          <Select
            label="School Type"
            value={filters.schoolType || ''}
            onChange={(val) => handleSelectChange('schoolType', val)}
            options={typeOptions}
            className="w-full"
          />
          <Select
            label="Status"
            value={filters.status || ''}
            onChange={(val) => handleSelectChange('status', val)}
            options={statusOptions}
            className="w-full"
          />
          <Select
            label="Activity"
            value={filters.activity || ''}
            onChange={(val) => handleSelectChange('activity', val)}
            options={activityOptions}
            className="w-full"
          />
        </div>

        {/* Reset */}
        <div className="pb-1">
          <Button
            variant="ghost"
            size="md"
            onClick={onReset}
            className="text-text-secondary whitespace-nowrap h-10"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SchoolFilters;
