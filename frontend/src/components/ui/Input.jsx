import React from 'react';
import { cn } from '../../utils/cn';

const Input = React.forwardRef(({ className, type, error, icon, helperText, ...props }, ref) => {
  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) {
      return icon;
    }
    if (typeof icon === 'function' || typeof icon === 'object') {
      const IconComponent = icon;
      return <IconComponent className="h-4 w-4" />;
    }
    return icon;
  };

  const iconElement = renderIcon();

  return (
    <div className="w-full">
      <div className="relative flex items-center">
        {iconElement && (
          <div className="absolute left-3 text-slate-400 pointer-events-none flex items-center justify-center">
            {iconElement}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            iconElement && "pl-10",
            error && "border-danger focus-visible:ring-danger",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-xs text-danger font-medium">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-xs text-slate-400">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
