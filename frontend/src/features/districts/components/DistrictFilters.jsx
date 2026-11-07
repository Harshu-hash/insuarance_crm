import React from 'react';
import { Search, RotateCcw, Filter } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { DISTRICT_STATUS, DISTRICT_PERFORMANCE_LABELS, DISTRICT_PERFORMANCE } from '../constants/district.constants';

const DistrictFilters = ({ filters, onFilterChange, onReset }) => {
  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: DISTRICT_STATUS.ACTIVE, label: 'Active' },
    { value: DISTRICT_STATUS.INACTIVE, label: 'Inactive' },
  ];

  const managerOptions = [
    { value: '', label: 'All Assignments' },
    { value: 'assigned', label: 'Manager Assigned' },
    { value: 'unassigned', label: 'Unassigned' },
  ];

  const performanceOptions = [
    { value: '', label: 'All Performance' },
    ...Object.entries(DISTRICT_PERFORMANCE_LABELS).map(([value, label]) => ({
      value,
      label
    }))
  ];

  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-border shadow-sm mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <Input
            placeholder="Search district name or code..."
            value={filters.search || ''}
            onChange={handleSearchChange}
            icon={Search}
          />
        </div>

        {/* Basic Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-[1.5]">
          <Select
            label=""
            value={filters.status || ''}
            onChange={(val) => handleSelectChange('status', val)}
            options={statusOptions}
            className="w-full"
          />
          <Select
            label=""
            value={filters.managerType || ''}
            onChange={(val) => handleSelectChange('managerType', val)}
            options={managerOptions}
            className="w-full"
          />
          <Select
            label=""
            value={filters.performance || ''}
            onChange={(val) => handleSelectChange('performance', val)}
            options={performanceOptions}
            className="w-full"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="md"
            onClick={onReset}
            className="text-text-secondary whitespace-nowrap"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DistrictFilters;
