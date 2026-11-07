import React from 'react';
import { cn } from '../../utils/cn';

const TextArea = React.forwardRef(({ className, error, helperText, ...props }, ref) => {
  return (
    <div className="w-full">
      <textarea
        className={cn(
          "flex w-full rounded-md border border-border bg-surface px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-y",
          error && "border-danger focus-visible:ring-danger",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-danger font-medium">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-xs text-slate-400">{helperText}</p>
      )}
    </div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
