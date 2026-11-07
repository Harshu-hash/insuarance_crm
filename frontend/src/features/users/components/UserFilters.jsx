import React from 'react';
import { Search, RotateCcw, Filter } from 'lucide-react';
import Select from '../../../components/ui/Select';
import { USER_ROLES, USER_STATUS, APPROVAL_STATUS, ROLE_LABELS } from '../constants/user.constants';

const UserFilters = ({ filters, onFilterChange, onReset }) => {
  const roleOptions = Object.entries(ROLE_LABELS).map(([value, label]) => ({
    value,
    label,
  }));

  const statusOptions = [
    { value: USER_STATUS.ACTIVE, label: 'Active' },
    { value: USER_STATUS.INACTIVE, label: 'Inactive' },
    { value: USER_STATUS.SUSPENDED, label: 'Suspended' },
  ];

  const approvalOptions = [
    { value: APPROVAL_STATUS.APPROVED, label: 'Approved' },
    { value: APPROVAL_STATUS.PENDING, label: 'Pending' },
    { value: APPROVAL_STATUS.REJECTED, label: 'Rejected' },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-6">
      <div className="flex flex-col lg:flex-row lg:items-end gap-4">
        {/* Search Input */}
        <div className="flex-1 space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block pl-1">
            Search Users
          </label>
          <div className="relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Name, email or mobile..."
              className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200"
              value={filters.search || ''}
              onChange={(e) => onFilterChange('search', e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:w-2/3">
          <Select
            placeholder="All Roles"
            label="Role"
            options={roleOptions}
            value={filters.role || ''}
            onChange={(e) => onFilterChange('role', e.target.value)}
          />
          <Select
            placeholder="All Status"
            label="Status"
            options={statusOptions}
            value={filters.status || ''}
            onChange={(e) => onFilterChange('status', e.target.value)}
          />
          <Select
            placeholder="Approval"
            label="Approval"
            options={approvalOptions}
            value={filters.approvalStatus || ''}
            onChange={(e) => onFilterChange('approvalStatus', e.target.value)}
          />
        </div>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="h-11 px-4 flex items-center justify-center bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-200 hover:text-slate-700 transition-all font-bold text-xs uppercase tracking-widest border border-slate-200 lg:mb-0"
          title="Reset Filters"
        >
          <RotateCcw size={14} className="mr-2" />
          Reset
        </button>
      </div>
    </div>
  );
};

export default UserFilters;
