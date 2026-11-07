import React from 'react';
import { Search, Filter, X, Calendar } from 'lucide-react';
import { AUDIT_MODULES, AUDIT_ACTIONS, AUDIT_SEVERITY, AUDIT_STATUS } from '../constants/audit.constants';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const AuditLogFilters = ({ filters, onFilterChange, onReset }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="lg:col-span-1">
          <Input
            placeholder="Search actor, target, or ID..."
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            icon={<Search size={16} />}
          />
        </div>

        {/* Module */}
        <Select
          value={filters.module}
          onChange={(e) => onFilterChange({ module: e.target.value })}
          options={[
            { label: 'All Modules', value: '' },
            ...Object.values(AUDIT_MODULES).map(m => ({ label: m.charAt(0).toUpperCase() + m.slice(1), value: m }))
          ]}
        />

        {/* Action Type */}
        <Select
          value={filters.action}
          onChange={(e) => onFilterChange({ action: e.target.value })}
          options={[
            { label: 'All Actions', value: '' },
            ...Object.values(AUDIT_ACTIONS).map(a => ({ label: a.replace(/_/g, ' ').toUpperCase(), value: a }))
          ]}
        />

        {/* Severity */}
        <Select
          value={filters.severity}
          onChange={(e) => onFilterChange({ severity: e.target.value })}
          options={[
            { label: 'All Severities', value: '' },
            ...Object.values(AUDIT_SEVERITY).map(s => ({ label: s.toUpperCase(), value: s }))
          ]}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-slate-100">
        <div className="flex flex-wrap items-center gap-4">
          {/* Status */}
          <div className="w-40">
            <Select
              value={filters.status}
              onChange={(e) => onFilterChange({ status: e.target.value })}
              options={[
                { label: 'All Statuses', value: '' },
                ...Object.values(AUDIT_STATUS).map(s => ({ label: s.toUpperCase(), value: s }))
              ]}
              className="h-9 text-xs"
            />
          </div>

          {/* Sensitive Toggles */}
          <label className="flex items-center space-x-2 cursor-pointer group">
            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters.securityOnly ? 'bg-primary border-primary text-white' : 'bg-white border-slate-300 group-hover:border-primary'}`}>
              {filters.securityOnly && <div className="w-2 h-2 bg-white rounded-full" />}
            </div>
            <input
              type="checkbox"
              className="hidden"
              checked={filters.securityOnly}
              onChange={(e) => onFilterChange({ securityOnly: e.target.checked })}
            />
            <span className="text-xs font-medium text-slate-600">Security Sensitive</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer group">
            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters.financeOnly ? 'bg-primary border-primary text-white' : 'bg-white border-slate-300 group-hover:border-primary'}`}>
              {filters.financeOnly && <div className="w-2 h-2 bg-white rounded-full" />}
            </div>
            <input
              type="checkbox"
              className="hidden"
              checked={filters.financeOnly}
              onChange={(e) => onFilterChange({ financeOnly: e.target.checked })}
            />
            <span className="text-xs font-medium text-slate-600">Finance Sensitive</span>
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
          <Button variant="secondary" size="sm" onClick={onReset} className="text-xs font-semibold">
            <X size={14} className="mr-1.5" />
            Reset
          </Button>
          <Button variant="primary" size="sm" className="text-xs font-semibold">
            <Filter size={14} className="mr-1.5" />
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuditLogFilters;
