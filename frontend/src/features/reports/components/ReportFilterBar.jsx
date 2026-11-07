import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { Search, Filter, X, Calendar, MapPin, ShieldCheck, Download } from 'lucide-react';
import { DATE_PRESETS, POLICY_YEARS } from '../constants/report.constants';

const ReportFilterBar = ({ filters, onFilterChange, onReset, onExport, isLoading }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-wrap gap-4 items-end">
        {/* Date Range Preset */}
        <div className="w-40">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Time Period</label>
          <div className="relative">
            <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <Select 
              className="pl-8 h-9 text-xs font-bold"
              value={filters.period || 'this_month'}
              onChange={(e) => onFilterChange({ period: e.target.value })}
            >
              {DATE_PRESETS.map(preset => (
                <option key={preset.value} value={preset.value}>{preset.label}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* Policy Year */}
        <div className="w-32">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Policy Year</label>
          <div className="relative">
            <ShieldCheck className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <Select 
              className="pl-8 h-9 text-xs font-bold"
              value={filters.policyYear || '2024-25'}
              onChange={(e) => onFilterChange({ policyYear: e.target.value })}
            >
              {POLICY_YEARS.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* District */}
        <div className="w-40">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">District</label>
          <div className="relative">
            <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <Select 
              className="pl-8 h-9 text-xs font-bold"
              value={filters.district || ''}
              onChange={(e) => onFilterChange({ district: e.target.value })}
            >
              <option value="">All Districts</option>
              <option value="Patna">Patna</option>
              <option value="Gaya">Gaya</option>
              <option value="Muzaffarpur">Muzaffarpur</option>
            </Select>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Quick Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <Input 
              placeholder="Search schools, IDs, or recipients..." 
              className="pl-9 h-9 text-xs font-bold"
              value={filters.search || ''}
              onChange={(e) => onFilterChange({ search: e.target.value })}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-9 font-bold text-[10px] uppercase tracking-wider" onClick={onReset}>
            <X size={14} className="mr-2" /> Reset
          </Button>
          <Button variant="primary" size="sm" className="h-9 font-bold text-[10px] uppercase tracking-wider" disabled={isLoading}>
            <Filter size={14} className="mr-2" /> Apply
          </Button>
          <Button variant="outline" size="sm" className="h-9 font-bold text-[10px] uppercase tracking-wider border-primary text-primary hover:bg-primary/5" onClick={onExport}>
            <Download size={14} className="mr-2" /> Export
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportFilterBar;
