import React from 'react';
import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';

const Select = ({ 
  label, 
  options = [], 
  error, 
  placeholder = 'Select an option', 
  className, 
  ...props 
}) => {
  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {label && (
        <label className="text-xs font-bold text-text-primary uppercase tracking-wider block">
          {label}
        </label>
      )}
      <div className="relative group">
        <select
          className={cn(
            "w-full h-11 px-4 appearance-none bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium transition-all duration-200",
            "focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary",
            "group-hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed",
            error ? "border-danger focus:ring-danger/10 focus:border-danger" : "border-slate-200",
          )}
          {...props}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary group-hover:text-slate-600 transition-colors">
          <ChevronDown size={16} />
        </div>
      </div>
      {error && (
        <p className="text-[10px] font-bold text-danger uppercase tracking-wider pl-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
