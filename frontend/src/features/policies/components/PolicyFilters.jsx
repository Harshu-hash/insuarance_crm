import React from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { POLICY_STATUS, POLICY_TYPE } from '../constants/policy.constants';

const PolicyFilters = ({ filters, onFilterChange, onReset }) => {
  const handleChange = (name, value) => {
    onFilterChange({ [name]: value });
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          placeholder="Search Name or Code..."
          value={filters.search}
          onChange={(e) => handleChange('search', e.target.value)}
          icon={<Search className="h-4 w-4 text-slate-400" />}
        />

        <Select
          placeholder="All Statuses"
          value={filters.status}
          onChange={(val) => handleChange('status', val)}
          options={Object.values(POLICY_STATUS).map(status => ({
            label: status.charAt(0).toUpperCase() + status.slice(1),
            value: status
          }))}
        />

        <Select
          placeholder="Policy Type"
          value={filters.type}
          onChange={(val) => handleChange('type', val)}
          options={Object.values(POLICY_TYPE).map(type => ({
            label: type.replace('_', ' ').charAt(0).toUpperCase() + type.replace('_', ' ').slice(1),
            value: type
          }))}
        />

        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            onClick={onReset}
            className="flex-1"
            icon={<RotateCcw className="h-4 w-4" />}
          >
            Reset
          </Button>
          <Button 
            variant="primary" 
            className="flex-1"
            icon={<Filter className="h-4 w-4" />}
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PolicyFilters;
