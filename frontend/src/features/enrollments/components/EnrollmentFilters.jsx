import React from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { PAYMENT_STATUS, POLICY_ACTIVATION_STATUS } from '../constants/enrollment.constants';

const EnrollmentFilters = ({ filters, onFilterChange, onReset }) => {
  const handleChange = (name, value) => {
    onFilterChange({ [name]: value });
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="lg:col-span-1">
          <Input
            placeholder="Search Enrollment ID, Student Name..."
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
            icon={<Search className="h-4 w-4 text-slate-400" />}
          />
        </div>

        {/* District Filter */}
        <Select
          placeholder="All Districts"
          value={filters.districtId}
          onChange={(val) => handleChange('districtId', val)}
          options={[
            { label: 'District 1', value: 'District 1' },
            { label: 'District 2', value: 'District 2' },
          ]}
        />

        {/* Block Filter */}
        <Select
          placeholder="All Blocks"
          value={filters.blockId}
          onChange={(val) => handleChange('blockId', val)}
          options={[
            { label: 'Block A', value: 'Block A' },
            { label: 'Block B', value: 'Block B' },
            { label: 'Block C', value: 'Block C' },
          ]}
          disabled={!filters.districtId}
        />

        {/* Payment Status */}
        <Select
          placeholder="Payment Status"
          value={filters.paymentStatus}
          onChange={(val) => handleChange('paymentStatus', val)}
          options={Object.values(PAYMENT_STATUS).map(status => ({
            label: status.charAt(0).toUpperCase() + status.slice(1),
            value: status
          }))}
        />

        {/* Policy Status */}
        <Select
          placeholder="Policy Status"
          value={filters.policyStatus}
          onChange={(val) => handleChange('policyStatus', val)}
          options={Object.values(POLICY_ACTIVATION_STATUS).map(status => ({
            label: status.replace('_', ' ').charAt(0).toUpperCase() + status.replace('_', ' ').slice(1),
            value: status
          }))}
        />

        {/* School Filter */}
        <Select
          placeholder="All Schools"
          value={filters.schoolId}
          onChange={(val) => handleChange('schoolId', val)}
          options={[
            { label: 'Adarsh High School', value: 'Adarsh High School' },
            { label: 'Government Secondary School', value: 'Government Secondary School' },
            { label: 'Modern Academy', value: 'Modern Academy' },
          ]}
          disabled={!filters.blockId}
        />

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 lg:col-span-2">
          <Button 
            variant="outline" 
            onClick={onReset}
            className="flex-1 lg:flex-none"
            icon={<RotateCcw className="h-4 w-4" />}
          >
            Reset
          </Button>
          <Button 
            variant="primary" 
            className="flex-1 lg:flex-none"
            icon={<Filter className="h-4 w-4" />}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentFilters;
