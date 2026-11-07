import React from 'react';
import { Filter, Calendar, MapPin, RefreshCcw } from 'lucide-react';
import Button from '../../../components/ui/Button';

const DashboardFilterBar = ({ filters, onFilterChange, onRefresh }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm mb-6">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center text-primary bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
          <Filter size={14} className="mr-2" />
          <span className="text-xs font-bold uppercase tracking-wider">Filters</span>
        </div>

        {/* Date Filter Shell */}
        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-slate-100 transition-colors">
          <Calendar size={14} className="text-slate-400 mr-2" />
          <span className="text-xs font-bold text-text-primary">Policy Year: 2025-26</span>
        </div>

        {/* District Filter Shell */}
        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-slate-100 transition-colors">
          <MapPin size={14} className="text-slate-400 mr-2" />
          <span className="text-xs font-bold text-text-primary">All Districts</span>
        </div>

        <button 
          className="text-xs font-bold text-slate-400 hover:text-primary transition-colors px-2"
          onClick={() => {}}
        >
          Clear All
        </button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={onRefresh} className="h-9 px-3">
          <RefreshCcw size={14} className="mr-2" />
          Refresh Data
        </Button>
        <Button variant="primary" size="sm" className="h-9 px-4">
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default DashboardFilterBar;
