import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { Search, Filter, X } from 'lucide-react';

const FinanceFilters = ({ filters, onFilterChange, onReset, type = 'transactions' }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <Input 
              placeholder="ID, Name, Linked Record..." 
              className="pl-9 h-9 text-xs"
              value={filters.search || ''}
              onChange={(e) => onFilterChange({ search: e.target.value })}
            />
          </div>
        </div>

        {type === 'transactions' && (
          <>
            <div className="w-40">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">Status</label>
              <Select 
                className="h-9 text-xs"
                value={filters.status || ''}
                onChange={(e) => onFilterChange({ status: e.target.value })}
              >
                <option value="">All Status</option>
                <option value="success">Success</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
                <option value="refunded">Refunded</option>
              </Select>
            </div>
            <div className="w-40">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">Payment Mode</label>
              <Select 
                className="h-9 text-xs"
                value={filters.mode || ''}
                onChange={(e) => onFilterChange({ mode: e.target.value })}
              >
                <option value="">All Modes</option>
                <option value="UPI">UPI</option>
                <option value="cash">Cash</option>
                <option value="bank_transfer">Bank Transfer</option>
              </Select>
            </div>
          </>
        )}

        {type === 'incentives' && (
          <>
            <div className="w-40">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">Role</label>
              <Select 
                className="h-9 text-xs"
                value={filters.role || ''}
                onChange={(e) => onFilterChange({ role: e.target.value })}
              >
                <option value="">All Roles</option>
                <option value="BM">BM</option>
                <option value="DM">DM</option>
              </Select>
            </div>
            <div className="w-40">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">Payout Status</label>
              <Select 
                className="h-9 text-xs"
                value={filters.status || ''}
                onChange={(e) => onFilterChange({ status: e.target.value })}
              >
                <option value="">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="on_hold">On Hold</option>
              </Select>
            </div>
          </>
        )}

        {type === 'payouts' && (
          <>
            <div className="w-40">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">Payout Status</label>
              <Select 
                className="h-9 text-xs"
                value={filters.status || ''}
                onChange={(e) => onFilterChange({ status: e.target.value })}
              >
                <option value="">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </Select>
            </div>
          </>
        )}

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-9" onClick={onReset}>
            <X size={14} className="mr-2" /> Reset
          </Button>
          <Button variant="primary" size="sm" className="h-9">
            <Filter size={14} className="mr-2" /> Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinanceFilters;
