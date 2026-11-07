import React from 'react';
import { cn } from '../../utils/cn';

const Checkbox = React.forwardRef(({ className, label, id, ...props }, ref) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <input
        type="checkbox"
        ref={ref}
        id={id}
        className={cn(
          "h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none text-text-primary cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
