import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { Search, Filter, X } from 'lucide-react';

const IncentiveFilters = ({ filters, onFilterChange, onReset }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Search Records</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <Input 
              placeholder="Incentive ID, Enrollment ID, Recipient Name..." 
              className="pl-9 h-9 text-xs font-bold"
              value={filters.search || ''}
              onChange={(e) => onFilterChange({ search: e.target.value })}
            />
          </div>
        </div>

        <div className="w-40">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Role</label>
          <Select 
            className="h-9 text-xs font-bold"
            value={filters.role || ''}
            onChange={(e) => onFilterChange({ role: e.target.value })}
          >
            <option value="">All Roles</option>
            <option value="BM">BM</option>
            <option value="DM">DM</option>
          </Select>
        </div>

        <div className="w-40">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Status</label>
          <Select 
            className="h-9 text-xs font-bold"
            value={filters.status || ''}
            onChange={(e) => onFilterChange({ status: e.target.value })}
          >
            <option value="">All Status</option>
            <option value="paid">Paid</option>
            <option value="payable">Payable</option>
            <option value="pending">Pending</option>
            <option value="on_hold">On Hold</option>
            <option value="reversed">Reversed</option>
          </Select>
        </div>

        <div className="w-40">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">District</label>
          <Select className="h-9 text-xs font-bold">
            <option value="">All Districts</option>
            <option value="Patna">Patna</option>
            <option value="Gaya">Gaya</option>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-9 font-bold text-[10px] uppercase tracking-wider" onClick={onReset}>
            <X size={14} className="mr-2" /> Reset
          </Button>
          <Button variant="primary" size="sm" className="h-9 font-bold text-[10px] uppercase tracking-wider">
            <Filter size={14} className="mr-2" /> Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IncentiveFilters;
