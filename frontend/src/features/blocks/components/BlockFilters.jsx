import React from 'react';
import { Search, RotateCcw } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { BLOCK_STATUS, BLOCK_PERFORMANCE_LABELS } from '../constants/block.constants';

const BlockFilters = ({ filters, onFilterChange, onReset, districtOptions = [] }) => {
  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: BLOCK_STATUS.ACTIVE, label: 'Active' },
    { value: BLOCK_STATUS.INACTIVE, label: 'Inactive' },
  ];

  const managerOptions = [
    { value: '', label: 'All Assignments' },
    { value: 'assigned', label: 'Assigned BM' },
    { value: 'unassigned', label: 'Unassigned' },
  ];

  const performanceOptions = [
    { value: '', label: 'All Performance' },
    ...Object.entries(BLOCK_PERFORMANCE_LABELS).map(([value, label]) => ({
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
        <div className="flex-[1.2] min-w-[200px]">
          <Input
            placeholder="Search block name or code..."
            value={filters.search || ''}
            onChange={handleSearchChange}
            icon={Search}
          />
        </div>

        {/* Global Selects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-[2.5]">
          <Select
            label=""
            value={filters.districtId || ''}
            onChange={(val) => handleSelectChange('districtId', val)}
            options={[{ value: '', label: 'All Districts' }, ...districtOptions]}
            className="w-full"
          />
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

export default BlockFilters;
