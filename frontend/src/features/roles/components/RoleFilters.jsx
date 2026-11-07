import React from 'react';
import { Search, RotateCcw, Filter } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { ROLE_TYPES, ROLE_STATUS, ROLE_SCOPES, ROLE_SCOPE_LABELS } from '../constants/role.constants';

const RoleFilters = ({ filters, onFilterChange, onReset }) => {
  const typeOptions = [
    { value: '', label: 'All Types' },
    { value: ROLE_TYPES.SYSTEM, label: 'System Roles' },
    { value: ROLE_TYPES.CUSTOM, label: 'Custom Roles' },
  ];

  const statusOptions = [
    { value: '', label: 'All Statuses' },
    { value: ROLE_STATUS.ACTIVE, label: 'Active' },
    { value: ROLE_STATUS.INACTIVE, label: 'Inactive' },
  ];

  const scopeOptions = [
    { value: '', label: 'All Scopes' },
    ...Object.values(ROLE_SCOPES).map(scope => ({
      value: scope,
      label: ROLE_SCOPE_LABELS[scope] || scope
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
            placeholder="Search by role name or code..."
            value={filters.search || ''}
            onChange={handleSearchChange}
            icon={Search}
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-[1.5]">
          <Select
            label=""
            value={filters.type || ''}
            onChange={(val) => handleSelectChange('type', val)}
            options={typeOptions}
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
            value={filters.scope || ''}
            onChange={(val) => handleSelectChange('scope', val)}
            options={scopeOptions}
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

export default RoleFilters;
